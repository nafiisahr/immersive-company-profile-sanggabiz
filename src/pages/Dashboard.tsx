// src/pages/Dashboard.tsx
import React, { useState } from "react";
import { Users2, UserMinus, UserPlus } from "lucide-react";

interface Client {
  id: number;
  name: string;
  email: string;
  company: string;
}

const initialClients: Client[] = [
  { id: 1, name: "Andi", email: "andi@gmail.com", company: "UMKM A" },
  { id: 2, name: "Sari", email: "sari@gmail.com", company: "UMKM B" },
  { id: 3, name: "Farhan", email: "farhan@gmail.com", company: "UMKM C" },
];

const Dashboard: React.FC = () => {
  const [clients, setClients] = useState<Client[]>(initialClients);

  const deleteClient = (id: number) => {
    setClients(clients.filter((client) => client.id !== id));
  };

  const addClient = () => {
    const newClient: Client = {
      id: clients.length + 1,
      name: "Nama Baru",
      email: "baru@gmail.com",
      company: "Perusahaan Baru",
    };
    setClients([...clients, newClient]);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-blue-400 mb-4 tracking-tight flex items-center gap-2">
            <Users2 className="w-10 h-10 text-blue-700" />
            Dashboard Clients
          </h1>
          <button
            onClick={addClient}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200"
          >
            <UserPlus className="w-5 h-5" />
            Tambah Client
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl shadow-md overflow-hidden">
            <thead className="bg-blue-100">
              <tr>
                <th className="p-3 text-left text-blue-700">ID</th>
                <th className="p-3 text-left text-blue-700">Nama</th>
                <th className="p-3 text-left text-blue-700">Email</th>
                <th className="p-3 text-left text-blue-700">Perusahaan</th>
                <th className="p-3 text-left text-blue-700">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, idx) => (
                <tr
                  key={client.id}
                  className={idx % 2 === 0 ? "bg-white" : "bg-blue-50"}
                >
                  <td className="p-3">{client.id}</td>
                  <td className="p-3 font-medium text-blue-700">{client.name}</td>
                  <td className="p-3 text-gray-600">{client.email}</td>
                  <td className="p-3 text-gray-600">{client.company}</td>
                  <td className="p-3">
                    <button
                      onClick={() => deleteClient(client.id)}
                      className="flex items-center gap-1 text-red-500 hover:text-red-600 transition-all duration-200"
                    >
                      <UserMinus className="w-4 h-4" />
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
