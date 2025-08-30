import { DefaultModalProps, InputTypes, ProductProps } from '@/types/types';
import React from 'react';
import { IoMdClose } from 'react-icons/io';
import InputForm from '../../global/InputForm';

function CreateModal({ isOpen, onClose, extraProps }: DefaultModalProps<ProductProps>) {
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
                    <h1 className='text-xl font-bold mb-4'>AGREGAR PRODUCTO</h1>
                </header>

                <div className='grid grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-4'>
                        <InputForm
                            id='producto'
                            type={InputTypes.TEXT}
                            label='Nombre del producto'
                        />
                        <InputForm
                            id='descripcion'
                            type={InputTypes.TEXT}
                            label='Descripcion'
                        />
                        <label htmlFor='category'>Categoria</label>
                        <select className='py-2 rounded-lg border'>
                            <option value='Sillas'>Sillas</option>
                            <option value='Sillas'>Sillas</option>
                            <option value='Sillas'>Sillas</option>
                            <option value='Sillas'>Sillas</option>
                        </select>

                        <div>
                            <label htmlFor=''>Imagen del producto</label>
                            <input
                                type='file'
                                className='border rounded-lg py-2'
                            />
                        </div>
                    </div>
                    <img
                        src=''
                        alt='Product_Preview'
                        className='border w-100 rounded-xl'
                    />

                    <div className='col-span-2 flex justify-around'>
                        <button className='border rounded-lg py-2 px-6 text-white bg-primary cursor-pointer'>
                            Agregar producto
                        </button>
                        <button
                            onClick={onClose}
                            className='border rounded-lg py-2 px-6 text-white bg-gray-300 cursor-pointer'>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateModal;
