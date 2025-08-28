'use client';
import React, { useState } from 'react';
import DetallePedidoModal from '@/components/admin/ventas/pagos/DetallePedidoModal';
import ConfirmarPagoModal from '@/components/admin/ventas/pagos/ConfirmarPagoModal';

interface PagoProps {
    id: string;
    cliente: string;
    deudaPendiente: number;
    fechaUltimoPago: string;
    rol: string;
    deuda: string;
    fecha: string;
    telefono: string;
    direccion: string;
    fechaPrimerPago: string;
    fechaUltimoPagoDetalle: string;
    servicios: string[];
}

function PagosPage() {
    const [pagos] = useState<PagoProps[]>([
        {
            id: '001',
            cliente: 'Brayan Mariaca',
            deudaPendiente: 150000,
            fechaUltimoPago: '11-05-25',
            rol: 'Cliente',
            telefono: '3015464534',
            deuda: '150.000',
            fecha: '11-05-25',
            direccion: 'Av. Siempre Viva',
            fechaPrimerPago: '27/05/2025',
            fechaUltimoPagoDetalle: '12/06/2025',
            servicios: [
                'Tapicería: Forrar mueble completo',
                'Fabricación: Fabricar silla para sala',
                'Reparación: Reparar silla reclinable',
            ],
        },
    ]);

    const [detalleOpen, setDetalleOpen] = useState(false);
    const [confirmarOpen, setConfirmarOpen] = useState(false);
    const [pagoSeleccionado, setPagoSeleccionado] = useState<PagoProps | null>(null);

    const abrirDetalle = (pago: PagoProps) => {
        setPagoSeleccionado(pago);
        setDetalleOpen(true);
    };

    return (
        <div className='p-6 md:p-10 w-full'>
            <h2 className='text-3xl font-semibold mb-6'>Gestión de Pagos</h2>

            {/* Tabla responsiva */}
            <div className='bg-gray-100 rounded-3xl p-6 w-full mt-10 h-auto md:h-140 overflow-x-auto'>
                <table className='w-full min-w-[600px]'>
                    <thead>
                        <tr className='text-left font-semibold text-gray-700 border-b'>
                            <th className='py-3 px-4'># Cliente</th>
                            <th className='py-3 px-4'>Cliente</th>
                            <th className='py-3 px-4'>Deuda pendiente</th>
                            <th className='py-3 px-4'>Fecha de ult. Pago</th>
                            <th className='py-3 px-4'>ROL</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y'>
                        {pagos.map((pago) => (
                            <tr
                                key={pago.id}
                                className='bg-white hover:bg-gray-50 cursor-pointer transition-colors'
                                onClick={() => abrirDetalle(pago)}>
                                <td className='py-3 px-4 truncate'>{pago.id}</td>
                                <td className='py-3 px-4 truncate'>{pago.cliente}</td>
                                <td className='py-3 px-4 truncate'>{pago.deuda}</td>
                                <td className='py-3 px-4 truncate'>{pago.fecha}</td>
                                <td className='py-3 px-4 truncate'>{pago.rol}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modales */}
            <DetallePedidoModal
                isOpen={detalleOpen}
                onClose={() => setDetalleOpen(false)}
                pago={pagoSeleccionado}
                onConfirmar={() => {
                    setDetalleOpen(false);
                    setConfirmarOpen(true);
                }}
            />

            <ConfirmarPagoModal
                isOpen={confirmarOpen}
                onClose={() => setConfirmarOpen(false)}
                pago={pagoSeleccionado}
            />
        </div>
    );
}

export default PagosPage;
