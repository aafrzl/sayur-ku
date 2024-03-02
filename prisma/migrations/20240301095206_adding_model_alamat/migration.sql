-- CreateTable
CREATE TABLE "Alamat" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "namaPenerima" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "kota" TEXT NOT NULL,
    "provinsi" TEXT NOT NULL,
    "kodepos" TEXT NOT NULL,
    "telepon" TEXT NOT NULL,
    "isUtama" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Alamat_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Alamat" ADD CONSTRAINT "Alamat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
