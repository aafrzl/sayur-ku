import z from "zod";

export type signInFormType = z.infer<typeof signInFormSchema>;

export const signInFormSchema = z.object({
  email: z
    .string()
    .email("Email tidak valid")
    .min(1, "Email tidak boleh kosong"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});
