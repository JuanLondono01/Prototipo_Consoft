'use client';
import { DefaultModalProps, ServicesProps } from '@/types/types';
import React, { useState } from 'react';
import EditService from './EditService';
import Swal from 'sweetalert2';

function ServiceInfo({ isOpen, onClose, extraProps }: DefaultModalProps<ServicesProps>) {
    const [editModal, setEditModal] = useState(false);
    if (!isOpen) return;

    const deleteService = () => {
        Swal.fire({
            icon: 'warning',
            title: '¿Esta seguro de eliminar este servicio?',
            html: 'Esta accion no se puede revertir',
            showConfirmButton: true,
            confirmButtonText: 'Eliminar Servicio',
            confirmButtonColor: 'red',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Servicio eliminado correctamente',
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
            <div className='modal-frame w-[400px]'>
                <header className='w-fit mx-auto'>
                    <h3 className='text-2xl '>DETALLES DEL SERVICIO</h3>
                </header>

                <section className='flex flex-col gap-4 mt-10'>
                    <p>Codigo - {extraProps?.id}</p>
                    <p>Servicio - {extraProps?.type}</p>
                    <p>Descripcion - {extraProps?.description}</p>
                    <p>Estado - {extraProps?.status ? '🟢' : '🔴'}</p>
                </section>

                <div className='flex w-full justify-between mt-10'>
                    <button
                        onClick={() => setEditModal(true)}
                        className='px-6 py-2 rounded-lg cursor-pointer text-white bg-primary'>
                        Editar Servicio
                    </button>
                    <button
                        onClick={deleteService}
                        className='px-6 py-2 rounded-lg cursor-pointer text-white bg bg-red-500'>
                        Eliminar Servicio
                    </button>
                </div>
            </div>
            <EditService
                isOpen={editModal}
                onClose={() => setEditModal(false)}
                extraProps={extraProps}
            />
        </div>
    );
}

export default ServiceInfo;
