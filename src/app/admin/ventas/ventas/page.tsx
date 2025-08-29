'use client';
import SaleInfoModal from '@/components/admin/ventas/ventas/SaleInfoModal';
import { venta } from '@/types/types';
import React, { useState } from 'react';

function page() {
    const [ventas, setVentas] = useState<venta[]>([
        {
            id: 'alskdklas',
            order: {
                id: 'asdad',
                estado: 'Completado',
                fechaEntrega: new Date('2025-02-02'),
                fechaInicio: new Date('2025-02-02'),
                servicios: [
                    {
                        type: 'Tapicería',
                        observations: 'Ninguna',
                        value: 250000,
                    },
                    {
                        type: 'Reparacion',
                        observations: 'Ninguna',
                        value: 2500000,
                    },
                ],
                user: {
                    nombre: 'Juan Esteban',
                    correo: 'correo@Cliente.com',
                    documento: 12345,
                    direccion: 'Calle 123',
                    telefono: '3001234567',
                    rol: 'Administrador',
                    activo: true,
                },
            },
        },
    ]);
    const [modal, setModal] = useState(false);
    const [sale, setSale] = useState<venta>();
    return (
        <div className='w-full px-6'>
            <header className='mt-25'>
                <h1 className='text-4xl'>Gestion de ventas</h1>
            </header>

            {/* Actions */}
            <section className='w-fit ml-auto'>
                <input
                    type='text'
                    placeholder='Buscar Venta'
                    className='border rounded-lg ml-auto px-2 py-1 w-70 mr-2'
                />
            </section>

            <section className='mt-20'>
                <div className='grid grid-cols-3 place-items-center'>
                    <p>ID Venta</p>
                    <p>Pedido</p>
                    <p>Valor de la venta</p>
                </div>
                <div className='bg-gray-300 p-6 min-h-160 rounded-lg flex flex-col gap-4'>
                    {ventas.map((venta) => (
                        <div
                            onClick={() => {
                                setModal(true);
                                setSale(venta);
                            }}
                            key={venta.id}
                            className='bg-white grid grid-cols-3 items-center text-center p-4 rounded-lg shadow-sm hover:shadow-md cursor-pointer transition hover:bg-gray-100'>
                            <p className='truncate'>{venta.id}</p>
                            <p>{venta.order.id}</p>
                            <p>
                                {venta.order.servicios.length > 0
                                    ? `$${venta.order.servicios.reduce(
                                          (acc, s) => acc + s.value,
                                          0
                                      )}`
                                    : '—'}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            <SaleInfoModal
                isOpen={modal}
                onClose={() => setModal(false)}
                sale={sale}
            />
        </div>
    );
}

export default page;
