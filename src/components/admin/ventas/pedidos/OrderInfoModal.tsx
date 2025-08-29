'use client';
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { Order } from '@/types/types';
import Swal from 'sweetalert2';
import EditOrderModal from './EditOrderModal';

interface OrderInfoModalProps {
    isOpen: boolean;
    onClose: () => void;
    orderInfo?: Order | null;
}

function OrderInfoModal({ isOpen, onClose, orderInfo }: OrderInfoModalProps) {
    const [editModal, setEditModal] = useState(false);
    if (!isOpen || !orderInfo) return null;

    const deleteOrder = () => {
        Swal.fire({
            icon: 'warning',
            title: '¿Esta seguro de eliminar este pedido?',
            html: 'Esta accion no se puede revertir',
            showConfirmButton: true,
            confirmButtonText: 'Eliminar Pedido',
            confirmButtonColor: 'red',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Pedido eliminado correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1000,
                });
                onClose();
            }
        });
    };

    return (
        <div className='modal-background'>
            <div className='modal-frame'>
                <header className='w-fit mx-auto'>
                    <button
                        onClick={onClose}
                        className='absolute top-4 left-4 text-2xl text-gray-500 hover:text-black cursor-pointer'>
                        <IoMdClose />
                    </button>
                    <h1 className='text-xl font-bold mb-4'>DETALLES DEL PEDIDO</h1>
                </header>

                {/* Detalles */}
                <div className='flex flex-col gap-2'>
                    <p>👤 Cliente: {orderInfo.user.nombre}</p>
                    <p>📞 Teléfono: {orderInfo.user.telefono}</p>
                    <p>📍 Dirección: {orderInfo.user.direccion}</p>
                    <p>🗓️ Fecha de inicio: {orderInfo.fechaInicio.toLocaleDateString()}</p>
                    <p>📦 Fecha de entrega: {orderInfo.fechaEntrega.toLocaleDateString()}</p>
                    <p className='font-semibold mt-2'>Servicios:</p>
                    <ul className='list-disc list-inside'>
                        {orderInfo.servicios.map((servicio: any) => (
                            <li key={servicio.type}>
                                {servicio.type} - {servicio.observations} (${servicio.value})
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full mt-10'>
                    <button
                        className='px-6 py-2 rounded-lg bg-amber-100 cursor-pointer text-base md:text-lg'
                        onClick={() => setEditModal(true)}>
                        Editar Pedido
                    </button>
                    <button
                        className='px-6 py-2 rounded-lg bg-red-600 text-white cursor-pointer text-base md:text-lg'
                        onClick={() => deleteOrder()}>
                        Eliminar Pedido
                    </button>
                </div>
            </div>
            <EditOrderModal
                isOpen={editModal}
                onClose={() => setEditModal(false)}
                pedido={orderInfo}
            />
        </div>
    );
}

export default OrderInfoModal;
