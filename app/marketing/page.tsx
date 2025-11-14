"use client";

import FormPengajuan from "@/app/components/FormPengajuan";
import TabelPengajuan from "@/app/components/TabelPengajuan";
import { useState } from "react";
import { pengajuanAwal } from "../data/dummy";
import Link from "next/link";


export default function Page() {
    const [list, setList] = useState(pengajuanAwal);

    const [form, setForm] = useState({
        nama: "",
        nik: "",
        tanggalLahir: "",
        statusPerkawinan: "",
        dataPasangan: "",
        dealer: "",
        merk: "",
        model: "",
        tipe: "",
        warna: "",
        harga: 0,
        asuransi: "",
        dp: 0,
        lamaKredit: 0,
        angsuran: 0,
    });

    const handleSubmit = () => {
        const newData = {
            id: list.length + 1,
            ...form,
            status: "Menunggu Approval",
        };

        setList([...list, newData]);

        setForm({
            nama: "",
            nik: "",
            tanggalLahir: "",
            statusPerkawinan: "",
            dataPasangan: "",
            dealer: "",
            merk: "",
            model: "",
            tipe: "",
            warna: "",
            harga: 0,
            asuransi: "",
            dp: 0,
            lamaKredit: 0,
            angsuran: 0,
        });
    };

    return (
        <main className="p-10 text-black">
            <h1 className="text-3xl font-bold mb-6 text-white">Marketing — Input Pengajuan (Fakhri Fajar R :D)</h1>
            <Link href="/admin" className="text-blue-500 underline mb-4 inline-block">Admin Page</Link>
            <FormPengajuan form={form} setForm={setForm} handleSubmit={handleSubmit} />
            <TabelPengajuan list={list} />
        </main>
    );
}
