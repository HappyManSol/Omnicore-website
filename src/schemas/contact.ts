import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters").max(100, "Company name is too long"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

