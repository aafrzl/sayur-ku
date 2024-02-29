import { z } from "zod";

export type ProfileFormType = z.infer<typeof updateProfileSchema>;

export const updateProfileSchema = z.object({
  name: z.string().min(1, "Nama tidak boleh kosong").optional(),
  password: z.string().min(6, "Password minimal 6 karakter").optional(),
  avatar: z
    .custom<File | undefined>()
    .refine(
      (file) =>
        !file || (file instanceof File && file.type.startsWith("image/")),
      "Foto profile harus berupa gambar"
    )
    .refine((file) => {
      return !file || file.size < 1024 * 1024 * 2;
    }, "Foto profile tidak boleh lebih dari 2MB"),
});
