import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const contactSubmissionSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name.").max(100),
  company: z.string().trim().min(2, "Enter your company name.").max(150),
  workEmail: z.string().trim().email("Enter a valid work email.").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number.")
    .max(30)
    .regex(/^[+()\-\s.0-9]+$/, "Enter a valid phone number."),
  businessDescription: z
    .string()
    .trim()
    .min(10, "Tell us a little more about your business.")
    .max(1000),
  serviceInterest: z.enum([
    "lead-generation",
    "sales-follow-up",
    "social-media-marketing",
    "accounting-back-office",
    "multiple-services",
    "not-sure",
  ]),
  message: z.string().trim().min(10, "Tell us briefly what you need.").max(2000),
});

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;

export const submitContactRequest = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSubmissionSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      full_name: data.fullName,
      company: data.company,
      work_email: data.workEmail,
      phone: data.phone,
      business_description: data.businessDescription,
      service_interest: data.serviceInterest,
      message: data.message,
    });

    if (error) {
      console.error(`Contact request storage failed: ${error.message}`);
      throw new Error("We couldn't send your request. Please try again.");
    }

    return { success: true };
  });