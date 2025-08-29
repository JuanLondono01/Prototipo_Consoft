import { DefaultModalProps, ServicesProps } from '@/types/types';
import React from 'react';

function EditService({ isOpen, onClose, extraProps }: DefaultModalProps<ServicesProps>) {
    if (!isOpen) return;
    return (
        <div className='modal-background'>
            <div className='modal-frame w-[400px]'>
                <header className='w-fit mx-auto'>
                    <h3 className='text-3xl'>EDITAR SERVICIO</h3>
                </header>

                <section className='mt-10 flex flex-col justify-between gap-4'>
                    <div className='flex flex-col'>
                        <label htmlFor='service'>Servicio</label>
                        <input
                            type='text'
                            id='service'
                            className='border py-2 px-2 rounded-lg'
                            value={extraProps?.type}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='description'>Descripcion</label>
                        <input
                            type='text'
                            id='description'
                            className='border py-2 px-2 rounded-lg'
                            value={extraProps?.description}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='status'>Servicio</label>
                        <select
                            name='status'
                            className='border py-2 rounded-lg'
                            id='status'>
                            <option selected={extraProps?.status} value='Activo'>Activo</option>
                            <option selected={!extraProps?.status} value='Inactivo'>Inactivo</option>
                        </select>
                    </div>
                </section>
                <div className='mt-10 flex justify-between'>
                    <button className='px-6 py-2 rounded-lg cursor-pointer text-white bg-primary'>
                        Guardar cambios
                    </button>
                    <button
                    onClick={onClose}
                        className='px-6 py-2 rounded-lg cursor-pointer text-white bg-gray-300'>
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditService;
