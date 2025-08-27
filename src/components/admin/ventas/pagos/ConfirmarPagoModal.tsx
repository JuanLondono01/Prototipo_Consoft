import React, { useState } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    pago: any;
}

function ConfirmarPagoModal({ isOpen, onClose, pago }: ModalProps) {
    const [estado, setEstado] = useState('Aprobado');

    if (!isOpen || !pago) return null;

    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50'>
            <div className='bg-white p-6 rounded-xl w-[500px] relative shadow-lg'>
                <h2 className='text-xl font-bold mb-4'>Confirmar Pago</h2>

                <label className='block mb-2'>Estado de la transferencia</label>
                <select
                    className='border p-2 rounded w-full mb-4'
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}>
                    <option value='Aprobado'>Aprobado</option>
                    <option value='Pendiente'>Pendiente</option>
                    <option value='Rechazado'>Rechazado</option>
                </select>

                {/* Aquí podrías poner el comprobante */}
                <div className='border rounded p-4 bg-gray-50 mb-4'>
                    <p className='text-sm text-gray-500'>Comprobante de transferencia</p>
                    <img
                        src='/comprobante.png'
                        alt='comprobante'
                        className='w-full rounded'
                    />
                </div>

                <div className='flex justify-between'>
                    <button
                        className='px-4 py-2 bg-gray-300 rounded'
                        onClick={onClose}>
                        Cancelar
                    </button>
                    <button className='px-4 py-2 bg-green-600 text-white rounded'>Confirmar</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmarPagoModal;
