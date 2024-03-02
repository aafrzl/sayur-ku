export type Provinsi = {
  value: {
    id: string;
    name: string;
  }[];
};

export type Kota = {
  value: {
    id: string;
    id_provinsi: string;
    name: string;
  }[];
};

export type Kecamatan = {
  value: {
    id: string;
    id_kabupaten: string;
    name: string;
  }[];
};

export type Kelurahan = {
  value: {
    id: string;
    id_kecamatan: string;
    name: string;
  }[];
};
