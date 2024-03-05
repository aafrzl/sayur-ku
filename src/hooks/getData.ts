import { Kecamatan, Kelurahan, Kota, Provinsi } from "@/types/wilayah";
import { User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getDataUser = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User>({
    queryKey: ["user"],
    queryFn: async () =>
      await axios.get("/api/account").then((res) => res.data.user),
    staleTime: 60 * 1000, // 1 minute
  });

  return { users, error, isLoading };
};

export const getDataProvinsi = () => {
  const { data: provinsi } = useQuery<Provinsi>({
    queryKey: ["provinsi"],
    queryFn: async () =>
      await axios
        .get<Provinsi>(
          `https://api.binderbyte.com/wilayah/provinsi?api_key=${process.env.NEXT_PUBLIC_BINDERBYTE_API_KEY}`
        )
        .then((res) => res.data),
    staleTime: 60 * 1000, // 1 minute
  });

  return provinsi;
};

export const getDataKota = (provinsiId: string) => {
  const { data: dataKota } = useQuery<Kota>({
    queryKey: ["kota", provinsiId],
    queryFn: async () =>
      await axios
        .get<Kota>(
          `https://api.binderbyte.com/wilayah/kabupaten?api_key=${process.env.NEXT_PUBLIC_BINDERBYTE_API_KEY}&id_provinsi=${provinsiId}`
        )
        .then((res) => res.data),
    enabled: !!provinsiId,
    staleTime: Infinity,
  });

  return dataKota;
};

export const getDataKecamatan = (kotaId: string) => {
  const { data: kecamatan } = useQuery<Kecamatan>({
    queryKey: ["kecamatan", kotaId],
    queryFn: async () =>
      await axios
        .get<Kecamatan>(
          `https://api.binderbyte.com/wilayah/kecamatan?api_key=${process.env.NEXT_PUBLIC_BINDERBYTE_API_KEY}&id_kabupaten=${kotaId}`
        )
        .then((res) => res.data),
    enabled: !!kotaId,
    staleTime: Infinity,
  });

  return kecamatan;
};

export const getDataKelurahan = (kecamatanId: string) => {
  const { data: kelurahan } = useQuery<Kelurahan>({
    queryKey: ["kelurahan", kecamatanId],
    queryFn: async () =>
      await axios
        .get<Kelurahan>(
          `https://api.binderbyte.com/wilayah/kelurahan?api_key=${process.env.NEXT_PUBLIC_BINDERBYTE_API_KEY}&id_kecamatan=${kecamatanId}`
        )
        .then((res) => res.data),
    enabled: !!kecamatanId,
    staleTime: Infinity,
  });

  return kelurahan;
};
