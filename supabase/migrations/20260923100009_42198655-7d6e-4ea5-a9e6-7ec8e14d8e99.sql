CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
  company text NOT NULL CHECK (char_length(company) BETWEEN 2 AND 150),
  work_email text NOT NULL CHECK (char_length(work_email) BETWEEN 5 AND 255),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 30),
  business_description text NOT NULL CHECK (char_length(business_description) BETWEEN 10 AND 1000),
  service_interest text NOT NULL CHECK (service_interest IN ('lead-generation', 'sales-follow-up', 'social-media-marketing', 'accounting-back-office', 'multiple-services', 'not-sure')),
  message text NOT NULL CHECK (char_length(message) BETWEEN 10 AND 2000),
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'closed')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.contact_submissions TO service_role;

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.set_contact_submission_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER set_contact_submission_updated_at
BEFORE UPDATE ON public.contact_submissions
FOR EACH ROW
EXECUTE FUNCTION public.set_contact_submission_updated_at();