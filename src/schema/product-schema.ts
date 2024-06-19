import { z } from "zod";

export const productSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Nama produk tidak boleh kosong" })
    .max(50, { message: "Nama produk tidak boleh lebih dari 50 karakter" }),
  price: z
    .string()
    .min(1, { message: "Harga tidak boleh kosong" })
    .regex(/^\d+$/, "Must be a number"),
  stock: z
    .string()
    .min(1, { message: "Stok tidak boleh kosong" })
    .regex(/^\d+$/, "Must be a number")
    .max(10, { message: "Stok tidak boleh lebih dari 10 digit" }),
  description: z
    .string()
    .min(1, { message: "Deskripsi produk tidak boleh kosong" })
    .max(500, {
      message: "Deskripsi produk tidak boleh lebih dari 500 karakter",
    }),
  image: z
    .custom<File | undefined>()
    .refine((file) => file instanceof File, "Foto produk harus diisi")
    .refine(
      (file) =>
        !file || (file instanceof File && file.type.startsWith("image/")),
      "Foto produk harus berupa gambar"
    )
    .refine((file) => {
      return !file || file.size < 1024 * 1024 * 2;
    }, "Foto produk tidak boleh lebih dari 2MB"),
  category: z.string().min(1, { message: "Kategori produk harus dipilih" }),
  unit: z.string().min(1, { message: "Satuan produk harus dipilih" }),
});

export type Product = z.infer<typeof productSchema>;
