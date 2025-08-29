import { SaleInfoProps } from '@/types/types';
import React from 'react';

function SaleInfoModal({ isOpen, onClose, sale }: SaleInfoProps) {
    if (!isOpen || !sale) return;
    return (
        <div className='modal-background'>
            <div className='modal-frame w-[400px]'>
                <header>
                    <h3 className='w-fit mx-auto text-xl'>DETALLES DE LA VENTA</h3>
                </header>
                <section className='flex flex-col mt-10 gap-6'>
                    <p>Codigo de la venta - {sale?.id}</p>
                    <p>Codigo de pedido - {sale?.order.id}</p>
                    <p>Cliente - {sale?.order.user.nombre}</p>
                    <p>Fecha de entrega - {sale?.order.fechaEntrega.toLocaleDateString()}</p>
                    <p>
                        Valor total del pedido - $
                        {sale?.order.servicios.reduce((acc, curr) => acc + curr.value, 0)}
                    </p>
                </section>
                <div className='mx-auto w-fit mt-10'>
                    <button
                        className='mx-auto px-6 py-2 border rounded-lg bg-primary text-secondary cursor-pointer'
                        onClick={onClose}>
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SaleInfoModal;
