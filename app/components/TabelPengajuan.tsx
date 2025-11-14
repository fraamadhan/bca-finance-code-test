export default function TabelPengajuan({ list }: any) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-xl font-semibold mb-4">Daftar Pengajuan</h2>

            {list.length === 0 ? (
                <p className="text-gray-600">Belum ada pengajuan</p>
            ) : (
                <table className="w-full border text-sm">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2 border">ID</th>
                            <th className="p-2 border">Nama</th>
                            <th className="p-2 border">Dealer</th>
                            <th className="p-2 border">Unit</th>
                            <th className="p-2 border">Harga</th>
                            <th className="p-2 border">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {list.map((p: any) => (
                            <tr key={p.id} className="text-center">
                                <td className="border p-2">{p.id}</td>
                                <td className="border p-2">{p.nama}</td>
                                <td className="border p-2">{p.dealer}</td>
                                <td className="border p-2">{p.merk} {p.model}</td>
                                <td className="border p-2">{p.harga}</td>
                                <td className="border p-2">{p.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
