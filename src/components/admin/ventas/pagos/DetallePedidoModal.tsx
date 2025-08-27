import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    pago: any;
    onConfirmar: () => void;
}

function DetallePedidoModal({ isOpen, onClose, pago, onConfirmar }: ModalProps) {
    if (!isOpen || !pago) return null;

    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50'>
            <div className='bg-white p-6 rounded-xl w-[450px] relative shadow-lg'>
                <h2 className='text-xl font-bold mb-4'>DETALLES DEL PEDIDO</h2>
                <p>
                    <strong>Cliente:</strong> {pago.cliente}
                </p>
                <p>
                    <strong>Teléfono:</strong> {pago.telefono}
                </p>
                <p>
                    <strong>Dirección:</strong> {pago.direccion}
                </p>
                <p>
                    <strong>Fecha de Primer pago:</strong> {pago.fechaPrimerPago}
                </p>
                <p>
                    <strong>Fecha de último pago:</strong> {pago.fechaUltimoPagoDetalle}
                </p>
                <p>
                    <strong>Valor pendiente:</strong> ${pago.deudaPendiente}
                </p>

                <h3 className='mt-3 font-semibold'>Servicios:</h3>
                <ul className='list-decimal ml-5'>
                    {pago.servicios.map((s: string, i: number) => (
                        <li key={i}>{s}</li>
                    ))}
                </ul>

                <div className='flex justify-between mt-5'>
                    <button
                        className='px-4 py-2 bg-gray-300 rounded'
                        onClick={onClose}>
                        Cerrar
                    </button>
                    <button
                        className='px-4 py-2 bg-blue-600 text-white rounded'
                        onClick={onConfirmar}>
                        Confirmar Pago
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DetallePedidoModal;
