'use client';
import Calendario from '@/components/admin/ventas/pedidos/Calendario';
import OrderInfoModal from '@/components/admin/ventas/pedidos/OrderInfoModal';
import React, { useState } from 'react';
import { Order } from '@/types/types';

const pedidos: Order[] = [
    {
        id: '1',
        user: {
            nombre: 'Wilmar Alexander Zapata',
            correo: 'wilmar@example.com',
            documento: 123456,
            direccion: 'CL 54B',
            telefono: '123456789',
            rol: 'cliente',
            activo: true,
        },
        fechaInicio: new Date('2025-08-12'),
        fechaEntrega: new Date('2025-08-10'),
        servicios: [
            { type: 'Tapicería', observations: 'Color azul', value: 50000 },
            { type: 'Fabricación', observations: '', value: 120000 },
            { type: 'Reparación', observations: 'Cojín dañado', value: 30000 },
        ],
        estado: '🟢',
    },
];

function Page() {
    const [detailsModal, setDetailsModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

    const handleOpenModal = (pedido: Order) => {
        setSelectedOrder(pedido);
        setDetailsModal(true);
    };

    return (
        <div className='w-full'>
            {/* Header */}
            <header className='mt-10 px-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
                <h1 className='text-3xl md:text-4xl font-semibold'>Agenda de pedidos</h1>
                <input
                    type='text'
                    placeholder='Buscar Pedido'
                    className='border rounded-xl px-4 py-2 w-full md:w-80'
                />
            </header>

            {/* Contenido */}
            <section className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 px-6'>
                {/* Calendario */}
                <Calendario />

                {/* Lista de pedidos */}
                <section className='bg-gray-100 rounded-lg p-4 flex flex-col gap-4 xl:h-[34rem] 2xl:h-[44rem] overflow-y-auto'>
                    {pedidos.map((pedido) => (
                        <div
                            key={pedido.id}
                            onClick={() => handleOpenModal(pedido)}
                            className='bg-white grid grid-cols-1 md:grid-cols-2 gap-2 p-4 rounded-xl cursor-pointer shadow-sm hover:shadow-md transition'>
                            <p className='truncate'>👤 Cliente: {pedido.user.nombre}</p>
                            <p>📞 Número: {pedido.user.telefono}</p>
                            <p className='truncate'>📍 Dirección: {pedido.user.direccion}</p>
                            <p>🗓️ Inicio: {pedido.fechaInicio.toLocaleDateString()}</p>
                            <p>📦 Entrega: {pedido.fechaEntrega.toLocaleDateString()}</p>
                            <div className='col-span-1 md:col-span-2'>
                                <p className='font-semibold'>Servicios:</p>
                                <ul className='list-disc list-inside'>
                                    {pedido.servicios.map((s, i) => (
                                        <li key={i}>{s.type}</li>
                                    ))}
                                </ul>
                            </div>
                            <p className='font-bold'>Estado {pedido.estado}</p>
                        </div>
                    ))}
                </section>
            </section>

            {/* Modal */}
            <OrderInfoModal
                isOpen={detailsModal}
                onClose={() => setDetailsModal(false)}
                orderInfo={selectedOrder!}
            />
        </div>
    );
}

export default Page;
