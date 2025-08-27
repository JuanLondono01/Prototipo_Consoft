'use client';
import React from 'react';
import { IoMdClose } from 'react-icons/io';

interface UserModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit?: (data: { nombre: string; password: string; correo: string; rol: string }) => void;
}

const CreateUserModal: React.FC<UserModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
}) => {
    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            nombre: formData.get('nombre') as string,
            password: formData.get('password') as string,
            correo: formData.get('correo') as string,
            rol: formData.get('rol') as string,
        };
        onSubmit?.(data);
        onClose();
    };

    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50'>
            <div className='bg-white p-6 rounded-xl w-[400px] relative'>
                {/* Botón cerrar */}
                <button
                    onClick={onClose}
                    className='absolute top-4 left-4 text-2xl text-gray-500 hover:text-black'>
                    <IoMdClose />
                </button>

                <h3 className='text-xl font-semibold text-center mb-4'>Crear nuevo usuario</h3>

                <form
                    className='flex flex-col gap-4'
                    onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='nombre'
                        placeholder='Nombre'
                        className='border rounded-lg px-3 py-2'
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='Contraseña'
                        className='border rounded-lg px-3 py-2'
                    />
                    <input
                        type='email'
                        name='correo'
                        placeholder='Correo'
                        className='border rounded-lg px-3 py-2'
                    />
                    <select
                        name='rol'
                        className='border rounded-lg px-3 py-2'>
                        <option value='Administrador'>Administrador</option>
                        <option value='Empleado'>Empleado</option>
                    </select>
                    <button
                        type='submit'
                        className='bg-[#6E4424] text-white rounded-lg py-2 hover:bg-[#5c381d] transition'>
                        Crear
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateUserModal;
