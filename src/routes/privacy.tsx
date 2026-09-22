import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/SiteChrome";
import { CONTACT_EMAIL } from "@/components/BookingDialog";

const TITLE = "Privacy Policy | Zisaura";
const DESCRIPTION =
  "How Zisaura collects, uses, and protects information submitted through this website and during client engagements.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="September 2026">
      <p>
        This policy explains how Zisaura handles information you share with us
        through this website or in the course of an engagement.
      </p>

      <LegalSection heading="Information we collect">
        <p>
          We collect the information you choose to give us — such as your name, email
          address, company, and any details you include in a message or on a call. We
          may also collect basic, aggregated website usage information.
        </p>
      </LegalSection>

      <LegalSection heading="How we use information">
        <p>
          We use your information to respond to inquiries, schedule and hold calls,
          provide agreed services, and keep records of our communications. We do not
          sell your information.
        </p>
      </LegalSection>

      <LegalSection heading="Client data">
        <p>
          When we perform work on your behalf, we may access systems and records that
          belong to you. We use that access only for the agreed scope of work, and we
          keep it confidential.
        </p>
      </LegalSection>

      <LegalSection heading="Service providers">
        <p>
          We use third-party tools for email, scheduling, storage, and similar
          business functions. These providers may process information on our behalf
          and are expected to keep it confidential.
        </p>
      </LegalSection>

      <LegalSection heading="Retention and security">
        <p>
          We keep information for as long as needed to run our business and meet
          record-keeping obligations, and we apply reasonable safeguards to protect
          it. No method of transmission or storage is completely secure.
        </p>
      </LegalSection>

      <LegalSection heading="Your choices">
        <p>
          You can ask us to access, correct, or delete the information we hold about
          you, or to stop contacting you, by emailing{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="Changes to this policy">
        <p>
          We may update this policy from time to time. The date at the top reflects
          the most recent revision.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
