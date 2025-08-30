'use client';
import { CategoryProps, DefaultModalProps, ProductProps } from '@/types/types';
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Swal from 'sweetalert2';
import EditModal from './EditModal';

function DetailsModal({ isOpen, onClose, extraProps }: DefaultModalProps<CategoryProps>) {
    const [editModal, setEditModal] = useState(false);

    if (!isOpen) return;
    const deleteProduct = () => {
        Swal.fire({
            icon: 'warning',
            title: '¿Esta seguro de eliminar esta categoria?',
            html: 'Esta accion no se puede revertir',
            showConfirmButton: true,
            confirmButtonText: 'Eliminar Categoria',
            confirmButtonColor: 'red',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Categoria eliminado correctamente',
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
            <div className='modal-frame w-[700px]'>
                <header className='w-fit mx-auto'>
                    <button
                        onClick={onClose}
                        className='absolute top-4 left-4 text-2xl text-gray-500 hover:text-black cursor-pointer'>
                        <IoMdClose />
                    </button>
                    <h3 className='text-2xl font-semibold'>DETALLES DEL categoria</h3>
                </header>

                <div className='grid grid-cols-2 gap-6 mt-10'>
                    <div className='flex flex-col gap-4'>
                        <p>Id: {extraProps?.id}</p>
                        <p>categoria: {extraProps?.category}</p>
                        <p>Descripcion: {extraProps?.desctiption}</p>
                        <p>Estado: {extraProps?.status ? '🟢' : '🔴'}</p>
                    </div>
                    <img
                        src=''
                        alt='Category_Preview'
                        className='border w-100 rounded-xl'
                    />

                    <div className='col-span-2 flex justify-around mt-15'>
                        <button
                        onClick={()=> setEditModal(true)}
                        className='border border-white rounded-lg py-2 px-6 text-black bg-secondary cursor-pointer'>
                            Editar Categoria
                        </button>
                        <button
                            onClick={deleteProduct}
                            className='border rounded-lg py-2 px-6 text-white bg-red-500 cursor-pointer'>
                            Eliminar Categoria
                        </button>
                    </div>
                </div>
            </div>
            <EditModal
                isOpen={editModal}
                onClose={() => setEditModal(false)}
                extraProps={extraProps}
            />
        </div>
    );
}

export default DetailsModal;
