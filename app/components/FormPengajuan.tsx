"use client";

import Image from "next/image";

export default function FormPengajuan({ form, setForm, handleSubmit }: any) {
    const set = (e: any) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    // upload file dan liat preview
    const setFile = (e: any) => {
        const file = e.target.files[0];
        if (!file) return;

        const previewUrl = URL.createObjectURL(file);

        setForm({
            ...form,
            [e.target.name]: file,
            [`${e.target.name}Preview`]: previewUrl,
        });
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h2 className="text-2xl font-semibold mb-6">Form Pengajuan Kredit</h2>

            {/* Data Konsumen */}
            <h3 className="text-lg font-bold mb-2">Data Konsumen</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

                <div>
                    <label className="block text-sm font-medium mb-1">Nama</label>
                    <input
                        className="border p-2 rounded w-full"
                        name="nama"
                        placeholder="Masukkan nama lengkap"
                        value={form.nama}
                        onChange={set}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">NIK</label>
                    <input
                        className="border p-2 rounded w-full"
                        placeholder="Masukkan NIK 16 digit"
                        name="nik"
                        value={form.nik}
                        onChange={set}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Tanggal Lahir</label>
                    <input
                        className="border p-2 rounded w-full"
                        type="date"
                        name="tanggalLahir"
                        value={form.tanggalLahir}
                        onChange={set}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Status Perkawinan</label>
                    <input
                        className="border p-2 rounded w-full"
                        placeholder="Menikah / Belum Menikah"
                        name="statusPerkawinan"
                        value={form.statusPerkawinan}
                        onChange={set}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Data Pasangan</label>
                    <input
                        className="border p-2 rounded w-full"
                        placeholder="Nama pasangan (opsional)"
                        name="dataPasangan"
                        value={form.dataPasangan}
                        onChange={set}
                    />
                </div>

                {/* upload file */}
                <div>
                    <label className="block text-sm font-medium mb-1">Upload KTP</label>
                    <input
                        type="file"
                        name="fileKTP"
                        onChange={setFile}
                        className="border p-2 rounded w-full"
                    />
                    {form.fileKTPPreview && (
                        <Image
                            width={200}
                            height={100}
                            src={form.fileKTPPreview}
                            alt="Preview KTP"
                            className="mt-2 h-32 w-auto rounded border"
                        />
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">
                        Upload Bukti Bayar Tanda Jadi
                    </label>
                    <input
                        type="file"
                        name="fileBuktiBayar"
                        onChange={setFile}
                        className="border p-2 rounded w-full"
                    />
                    {form.fileBuktiBayarPreview && (
                        <Image
                            width={200}
                            height={100}
                            src={form.fileBuktiBayarPreview}
                            alt="Preview Bukti Bayar"
                            className="mt-2 h-32 w-auto rounded border"
                        />
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Upload Kartu Keluarga</label>
                    <input
                        type="file"
                        name="fileKK"
                        onChange={setFile}
                        className="border p-2 rounded w-full"
                    />
                    {form.fileKKPreview && (
                        <Image
                            width={200}
                            height={100}
                            src={form.fileKKPreview}
                            alt="Preview KK"
                            className="mt-2 h-32 w-auto rounded border"
                        />
                    )}
                </div>
            </div>

            {/* Data Kendaraan */}
            <h3 className="text-lg font-bold mb-2">Data Kendaraan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

                <div>
                    <label className="block text-sm font-medium mb-1">Dealer</label>
                    <input
                        className="border p-2 rounded w-full"
                        placeholder="Nama dealer"
                        name="dealer"
                        value={form.dealer}
                        onChange={set}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Merk Kendaraan</label>
                    <input
                        className="border p-2 rounded w-full"
                        placeholder="Contoh: Toyota, Honda"
                        name="merk"
                        value={form.merk}
                        onChange={set}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Model Kendaraan</label>
                    <input
                        className="border p-2 rounded w-full"
                        placeholder="Contoh: Avanza, Brio"
                        name="model"
                        value={form.model}
                        onChange={set}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Tipe Kendaraan</label>
                    <input
                        className="border p-2 rounded w-full"
                        placeholder="Contoh: 1.5 G, RS CVT"
                        name="tipe"
                        value={form.tipe}
                        onChange={set}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Warna Kendaraan</label>
                    <input
                        className="border p-2 rounded w-full"
                        placeholder="Hitam, Putih, Silver"
                        name="warna"
                        value={form.warna}
                        onChange={set}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Harga Kendaraan</label>
                    <input
                        className="border p-2 rounded w-full"
                        type="number"
                        placeholder="Contoh: 230000000"
                        name="harga"
                        value={form.harga}
                        onChange={set}
                    />
                </div>
            </div>

            {/* Data Pinjaman */}
            <h3 className="text-lg font-bold mb-2">Data Pinjaman</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

                <div>
                    <label className="block text-sm font-medium mb-1">Asuransi</label>
                    <input
                        className="border p-2 rounded w-full"
                        placeholder="Asuransi Fajar"
                        name="asuransi"
                        value={form.asuransi}
                        onChange={set}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Down Payment</label>
                    <input
                        className="border p-2 rounded w-full"
                        type="number"
                        placeholder="Nominal DP"
                        name="dp"
                        value={form.dp}
                        onChange={set}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Lama Kredit (bulan)</label>
                    <input
                        className="border p-2 rounded w-full"
                        type="number"
                        placeholder="12 / 24 / 36 / 48 / 60"
                        name="lamaKredit"
                        value={form.lamaKredit}
                        onChange={set}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Angsuran per Bulan</label>
                    <input
                        className="border p-2 rounded w-full"
                        type="number"
                        placeholder="Nominal angsuran"
                        name="angsuran"
                        value={form.angsuran}
                        onChange={set}
                    />
                </div>

            </div>

            <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700"
            >
                Submit Pengajuan
            </button>
        </div>
    );
}
