"use client";

import { useState } from "react";
import AdminApprovalTable from "../components/AdminApprovalTable";
import { pengajuanAwal } from "../data/dummy";
import Link from "next/link";

export default function AdminPage() {
    const [list, setList] = useState(pengajuanAwal);

    const approve = (id: any) => {
        setList(list.map((p: any) =>
            p.id === id ? { ...p, status: "Disetujui" } : p
        ));
    };

    const reject = (id: any) => {
        setList(list.map((p: any) =>
            p.id === id ? { ...p, status: "Ditolak" } : p
        ));
    };

    return (
        <main className="p-10 text-black">
            <h1 className="text-3xl font-bold mb-6 text-white">Admin — Approval Pengajuan (Fakhri Fajar R :D)</h1>
            <Link href="/marketing" className="text-blue-500 underline mb-4 inline-block">Marketing Page</Link>
            <AdminApprovalTable list={list} approve={approve} reject={reject} />
        </main>
    );
}
