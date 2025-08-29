'use client';
import { DefaultModalProps, ServicesProps } from '@/types/types';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

function CreateService({ isOpen, onClose }: DefaultModalProps) {
    const [serviceData, setServiceData] = useState<ServicesProps>();

    if (!isOpen) return;

    const createNewService = () => {
        Swal.fire({
            title: 'Servicio creado con exito',
            icon: 'success',
            showConfirmButton: false,
            timer: 1000,
        });
    };

    return (
        <div className='modal-background'>
            <div className='modal-frame w-[500px]'>
                <header className='w-fit mx-auto'>
                    <h3 className='text-2xl'>CREAR SERVICIO</h3>
                </header>

                <section className='mt-10'>
                    <div className='flex flex-col'>
                        <label htmlFor='service'>Servicio</label>
                        <input
                            type='text'
                            id='service'
                            className='border py-2 px-2 rounded-lg'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='description'>Descripcion</label>
                        <input
                            type='text'
                            id='description'
                            className='border py-2 px-2 rounded-lg'
                        />
                    </div>
                    <div className='flex justify-between  w-full mt-10'>
                        <button
                            onClick={() => {
                                createNewService();
                                onClose();
                            }}
                            className='bg-primary text-secondary px-6 py-2 rounded-lg cursor-pointer'>
                            Crear Servicio
                        </button>
                        <button
                            onClick={onClose}
                            className='bg-gray-300 px-6 py-2 text-white rounded-lg cursor-pointer'>
                            Cancelar
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default CreateService;
