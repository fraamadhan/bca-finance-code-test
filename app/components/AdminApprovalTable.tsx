export default function AdminApprovalTable({ list, approve, reject }: any) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-xl font-semibold mb-4">Approval Pengajuan</h2>

            {list.length === 0 ? (
                <p className="text-gray-600">Belum ada pengajuan</p>
            ) : (
                <table className="w-full border">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2 border">ID</th>
                            <th className="p-2 border">Nama</th>
                            <th className="p-2 border">NIK</th>
                            <th className="p-2 border">Unit</th>
                            <th className="p-2 border">DP</th>
                            <th className="p-2 border">Status</th>
                            <th className="p-2 border">Aksi</th>
                        </tr>
                    </thead>

                    <tbody>
                        {list.map((p) => (
                            <tr key={p.id} className="text-center">
                                <td className="border p-2">{p.id}</td>
                                <td className="border p-2">{p.nama}</td>
                                <td className="border p-2">{p.nik}</td>
                                <td className="border p-2">{p.model + p.tipe}</td>
                                <td className="border p-2">{p.dp}</td>
                                <td className="border p-2">{p.status}</td>
                                <td className="border p-2">
                                    {p.status === "Menunggu Approval" && (
                                        <div className="flex justify-center gap-2">
                                            <button
                                                onClick={() => approve(p.id)}
                                                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                                            >
                                                Approve
                                            </button>
                                            <button
                                                onClick={() => reject(p.id)}
                                                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                                            >
                                                Reject
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
