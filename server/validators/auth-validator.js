import { z } from "zod";

export const signupSchema = z.object({
  username: z
    .string({ required_error: "Please enter a username " })
    .trim()
    .min(3, { message: " username must be at least 3 characters long" })
    .max(255, {
      message: " username must be at most 255 characters long",
    }),
  email: z
    .string({ required_error: "Please enter a email address" })
    .trim()
    .email()
    .min(3, { message: "Please enter a valid email address " })
    .max(255, { message: "Please enter a valid email address " }),
  phone: z
    .string({ required_error: "phone number is required" })
    .trim()
    .min(10, { message: "phone number must be at least 10 numerber long " })
    .max(255, { message: "Please enter a valid phone number " }),
  password: z
    .string({ required_error: " password is required" })
    .trim()
    .min(8, { message: "password must be at least 8 characters long" })
    .max(255, {
      message: "password must be at least 255 characters long",
    }),
});
