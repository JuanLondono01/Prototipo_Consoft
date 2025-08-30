'use client';
import { DefaultModalProps, VisitSProps } from '@/types/types';
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import EditVisitModal from './EditVisitModal';
import Swal from 'sweetalert2';

function DetailsVisitModal({ isOpen, onClose, extraProps }: DefaultModalProps<VisitSProps>) {
    const [editVisit, setEditVisit] = useState(false);

    const deleteVisit= () => {
        Swal.fire({
            icon: 'warning',
            title: '¿Esta seguro de eliminar esta visita?',
            html: 'Esta accion no se puede revertir',
            showConfirmButton: true,
            confirmButtonText: 'Eliminar Visita',
            confirmButtonColor: 'red',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Visita eliminado correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1000,
                });
                onClose();
            }
        });
    };

    if (!isOpen) return;
    return (
        <div className='modal-background'>
            <div className='modal-frame w-[500px]'>
                <header className='w-fit mx-auto'>
                    <button
                        onClick={onClose}
                        className='absolute top-4 left-4 text-2xl text-gray-500 hover:text-black cursor-pointer'>
                        <IoMdClose />
                    </button>
                    <h3 className='text-2xl font-semibold'>DETALLES DE LA VISITA</h3>
                </header>

                <section className='flex flex-col mt-10 gap-3 p-6'>
                    <p>Cliente: {extraProps?.user.nombre}</p>
                    <p>Direccion: {extraProps?.user.direccion}</p>
                    <p>Telefono: {extraProps?.user.telefono}</p>
                    <p>Fecha de visita: {extraProps?.fechaVisita.toLocaleDateString()}</p>
                    <p>Estado: {extraProps?.status}</p>
                    <div>
                        <p>Servicios:</p>
                        {extraProps?.services.map((service, i) => (
                            <p key={i}>
                                {i + 1}. {service.type}
                            </p>
                        ))}
                    </div>
                </section>
                <section className='w-full flex justify-between'>
                    <button
                        onClick={() => setEditVisit(true)}
                        className='border rounded-lg px-6 py-2 text-white cursor-pointer bg-primary'>
                        Editar Visita
                    </button>
                    <button
                        onClick={deleteVisit}
                        className='border rounded-lg px-6 py-2 text-white cursor-pointer bg-red-500'>
                        Eliminar Visita
                    </button>
                </section>
            </div>
            <EditVisitModal
                isOpen={editVisit}
                onClose={() => setEditVisit(false)}
                extraProps={extraProps}
            />
        </div>
    );
}

export default DetailsVisitModal;