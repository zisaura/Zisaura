import { createContext, useContext, useState, type ReactNode } from "react";
import { CalendarClock, Mail } from "lucide-react";
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
              Online scheduling isn't connected yet. Send a short note with your
              availability and we'll confirm a time.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-2 space-y-3">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Request%20a%20free%20call`}
              className="flex items-center gap-3 rounded-md bg-accent px-4 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email {CONTACT_EMAIL}
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
    <button type="button" onClick={open} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}
