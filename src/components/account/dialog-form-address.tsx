'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

import { getDataKecamatan, getDataKelurahan, getDataKota, getDataProvinsi } from "@/hooks/getData";
import { ProfileFormAdressType, updateProfileAddressSchema } from '@/schema/update-user-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from "axios";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { AutosizeTextarea } from '../ui/textarea';
import { toast } from "../ui/use-toast";
import { useRouter } from "next/navigation";

export default function DialogFormAddress() {
  const router = useRouter()

  const [provinsiId, setProvinsiId] = useState("")
  const [kotaId, setKotaId] = useState("")
  const [kecamatanId, setKecamatanId] = useState("")
  const [open, setOpen] = useState(false)

  const provinsi = getDataProvinsi()
  const dataKota = getDataKota(provinsiId)
  const kecamatan = getDataKecamatan(kotaId)
  const kelurahan = getDataKelurahan(kecamatanId)

  const form = useForm<ProfileFormAdressType>({
    resolver: zodResolver(updateProfileAddressSchema),
  })

  const onSubmit = async (data: ProfileFormAdressType) => {
    try {
      const res = await axios.post('/api/account', data);
      if (res.status === 200) {
        toast({
          title: 'Berhasil',
          description: 'Alamat berhasil disimpan',
        })
      }

      form.reset()
      setProvinsiId("")
      setKotaId("")
      setKecamatanId("")
      setOpen(false)
      router.refresh()
    } catch (error) {
      toast({
        title: 'Gagal',
        description: 'Terjadi kesalahan saat menyimpan alamat',
        variant: "destructive"
      })
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setOpen(!open)
        form.reset()
      }}
    >
      <DialogTrigger asChild>
        <Button
          variant="outline"
          onClick={() => setOpen(true)}
        >
          Tambah Alamat
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[400px] md:w-fit">
        <DialogHeader>
          <DialogTitle>
            Tambah Alamat
          </DialogTitle>
          <DialogDescription>
            Tambahkan alamat pengiriman baru untuk mempermudah proses checkout
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-full space-y-4'>
            <FormField
              control={form.control}
              name='namaPenerima'
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor='namaPenerima'>Nama Penerima</FormLabel>
                  <FormControl>
                    <Input
                      id='namaPenerima'
                      type='text'
                      placeholder='Masukkan nama penerima'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='telepon'
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor='telepon'>No Telepon</FormLabel>
                  <FormControl>
                    <Input
                      id='telepon'
                      type='text'
                      placeholder='Masukkan nomor telepon'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='alamat'
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor='alamat'>Alamat</FormLabel>
                  <FormControl>
                    <AutosizeTextarea
                      id='alamat'
                      placeholder='Alamat lengkap pengiriman'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='provinsi'
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor='provinsi'>Provinsi</FormLabel>
                  <FormControl>
                    <Select
                      {...field}
                      onValueChange={(value) => {
                        setProvinsiId(provinsi?.value.find((prov) => prov.name === value)?.id || "")
                        field.onChange(value)
                      }}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih Provinsi" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {provinsi?.value.map((prov) => (
                          <SelectItem
                            key={prov.id}
                            value={prov.name}
                          >
                            {prov.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {provinsiId && (
              <FormField
                control={form.control}
                name='kota'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor='kota'>Kota/Kabupaten</FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        onValueChange={(value) => {
                          setKotaId(dataKota?.value.find((kota) => kota.name === value)?.id || "")
                          field.onChange(value)
                        }}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih Kota/Kabupaten" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {dataKota?.value.map((kota) => (
                            <SelectItem
                              key={kota.id}
                              value={kota.name}
                            >
                              {kota.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {kotaId && (
              <FormField
                control={form.control}
                name='kecamatan'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor='kecamatan'>Kecamatan</FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        onValueChange={(value) => {
                          setKecamatanId(kecamatan?.value.find((kec) => kec.name === value)?.id || "")
                          field.onChange(value)
                        }}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih Kecamatan" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {kecamatan?.value.map((kec) => (
                            <SelectItem
                              key={kec.id}
                              value={kec.name}
                            >
                              {kec.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {kecamatanId && (
              <FormField
                control={form.control}
                name='kelurahan'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor='kelurahan'>Kelurahan</FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih Kelurahan" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {kelurahan?.value.map((kel) => (
                            <SelectItem
                              key={kel.id}
                              value={kel.name}
                            >
                              {kel.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <Button
              type='submit'
              className='w-full'
            >
              Simpan Alamat
            </Button>
          </form>
        </Form >
      </DialogContent>
    </Dialog>
  )
}
