import { z } from "zod";

export const sendEmailSchema = z.object({
  name: z
    .string({ required_error: "Required" })
    .min(6, { message: "Name must be at least 6 characters long!" }),
  email: z
    .string({ required_error: "Required" })
    .email({ message: "Invalid email!" }),
  message: z
    .string({ required_error: "Required" })
    .min(20, { message: "Message must be at least 20 characters long!" }),
});
