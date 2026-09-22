import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/SiteChrome";
import { CONTACT_EMAIL } from "@/components/BookingDialog";

const TITLE = "Terms of Service | Zisaura";
const DESCRIPTION =
  "The terms that apply to use of the Zisaura website and to outsourced growth and operations engagements.";

export const Route = createFileRoute("/terms")({
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
  component: Terms,
});

function Terms() {
  return (
    <LegalPage title="Terms of Service" updated="September 2026">
      <p>
        These terms apply to your use of this website and to any engagement with
        Zisaura unless a signed agreement says otherwise.
      </p>

      <LegalSection heading="Use of this website">
        <p>
          The content here is provided for general information about our services. It
          is not advice for your specific situation and does not create a client
          relationship on its own.
        </p>
      </LegalSection>

      <LegalSection heading="Engagements and scope">
        <p>
          Work begins only after we agree a written scope. That scope defines the
          services, deliverables, timing, and fees. Anything outside it is handled as
          a separate agreement.
        </p>
      </LegalSection>

      <LegalSection heading="No guaranteed outcomes">
        <p>
          We commit to performing the agreed activities with care and consistency. We
          do not guarantee a specific number of leads, sales, revenue, or any other
          business result.
        </p>
      </LegalSection>

      <LegalSection heading="Not professional advice">
        <p>
          Our accounting and back-office services are support work such as
          bookkeeping and administration. We do not provide CPA, tax, audit, or legal
          services, and nothing we deliver replaces advice from a licensed
          professional.
        </p>
      </LegalSection>

      <LegalSection heading="Your responsibilities">
        <p>
          You agree to provide accurate information, timely access to the systems
          needed for the work, and responses to questions that block progress. You
          remain responsible for your own records and filings.
        </p>
      </LegalSection>

      <LegalSection heading="Confidentiality and ownership">
        <p>
          Each side keeps the other's confidential information private. Materials we
          produce for you as part of an engagement are yours once fees for that work
          are paid.
        </p>
      </LegalSection>

      <LegalSection heading="Fees and cancellation">
        <p>
          Fees, billing periods, and notice requirements are set out in the agreed
          scope. Either side may end an engagement in line with the notice terms in
          that document.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of liability">
        <p>
          To the extent permitted by law, our total liability arising from an
          engagement is limited to the fees paid for the work in question, and we are
          not liable for indirect or consequential losses.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about these terms can be sent to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
