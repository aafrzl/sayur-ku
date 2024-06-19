import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z.string().min(1, "Nama tidak boleh kosong").optional(),
  password: z.string().min(6, "Password minimal 6 karakter").optional(),
  avatar: z
    .custom<File | undefined>()
    .refine(
      (file) =>
        !file || (file instanceof File && file.type.startsWith("image/*")),
      "Foto profile harus berupa gambar"
    )
    .refine((file) => {
      return !file || file.size < 1024 * 1024 * 2;
    }, "Foto profile tidak boleh lebih dari 2MB"),
});

export const updateProfileAddressSchema = z.object({
  namaPenerima: z
    .string()
    .min(1, "Nama penerima tidak boleh kosong")
    .max(50, "Nama penerima tidak boleh lebih dari 50 karakter"),
  telepon: z
    .string()
    .min(1, "Nomor HP tidak boleh kosong")
    .max(15, "Nomor HP tidak boleh lebih dari 15 karakter"),
  alamat: z
    .string()
    .min(1, "Alamat tidak boleh kosong")
    .max(255, "Alamat tidak boleh lebih dari 255 karakter"),
  kota: z.string().min(1, "Kota tidak boleh kosong"),
  provinsi: z.string().min(1, "Provinsi tidak boleh kosong"),
  kecamatan: z.string().min(1, "Kecamatan tidak boleh kosong"),
  kelurahan: z.string().min(1, "Kelurahan tidak boleh kosong"),
});

export type ProfileFormType = z.infer<typeof updateProfileSchema>;
export type ProfileFormAdressType = z.infer<typeof updateProfileAddressSchema>;
