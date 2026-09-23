import { createContext, useContext, useState, type ReactNode } from "react";
import { CalendarClock, Mail, MessageSquareText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

/**
 * Booking is intentionally a placeholder panel until a real scheduling link
 * (Calendly, Cal.com, HubSpot, etc.) is supplied. Replace BOOKING_URL below
 * and the panel becomes a direct link to the calendar.
 */
export const BOOKING_URL_PLACEHOLDER = "BOOKING_URL_PLACEHOLDER";
export const BOOKING_URL: string | null = null;
export const CONTACT_EMAIL = "hello@zisaura.com";

const BookingContext = createContext<{ open: () => void }>({ open: () => {} });

export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BookingContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="border-border bg-card sm:max-w-md">
          <DialogHeader>
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary">
              <CalendarClock className="h-5 w-5 text-accent" aria-hidden="true" />
            </div>
            <DialogTitle className="font-display text-xl tracking-tight">
              Book a free call
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Tell us what you want to improve and we’ll follow up to arrange a time.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-2 space-y-3">
            <Button asChild className="h-11 w-full justify-start bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="/#contact" onClick={() => setIsOpen(false)}>
                <MessageSquareText aria-hidden="true" />
                Send an inquiry
              </a>
            </Button>
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <Mail className="h-4 w-4" aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>
            <p className="font-mono text-xs leading-relaxed text-muted-foreground">
              No long-term commitment required to start a conversation.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </BookingContext.Provider>
  );
}

export function BookCallButton({
  children = "Book a Free Call",
  variant = "primary",
  className = "",
}: {
  children?: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}) {
  const { open } = useBooking();
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-accent text-accent-foreground hover:opacity-90"
      : "border border-border-strong text-foreground hover:bg-secondary";

  if (BOOKING_URL) {
    return (
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noreferrer"
        className={`${base} ${styles} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Button type="button" onClick={open} className={`${base} ${styles} ${className}`}>
      {children}
    </Button>
  );
}
