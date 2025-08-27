'use client';
import React, { useState, useEffect } from 'react';

interface UserProps {
    nombre: string;
    correo: string;
    documento: number;
    direccion: string;
    telefono: string;
    rol: string;
    activo: boolean;
}

interface UserModalProps {
    isOpen: boolean;
    onClose: () => void;
    user?: UserProps;
}

function EditUserModal({ isOpen, onClose, user }: UserModalProps) {
    const [userInfo, setUserInfo] = useState<UserProps | undefined>(user);

    useEffect(() => {
        setUserInfo(user); // Actualizar datos cuando cambie el usuario
    }, [user]);

    if (!isOpen || !userInfo) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50'>
            <div className='bg-white p-8 rounded-xl max-w-lg w-full mx-4'>
                <h3 className='text-xl font-semibold text-center mb-6'>
                    EDITAR INFORMACION DE USUARIO
                </h3>

                <form className='flex flex-col gap-4'>
                    {/* Nombre */}
                    <div className='flex flex-col'>
                        <label className='text-sm font-medium mb-1'>Nombre</label>
                        <input
                            type='text'
                            name='nombre'
                            value={userInfo.nombre}
                            onChange={handleChange}
                            className='border rounded-lg px-3 py-2'
                        />
                    </div>

                    {/* Correo */}
                    <div className='flex flex-col'>
                        <label className='text-sm font-medium mb-1'>Correo</label>
                        <input
                            type='email'
                            name='correo'
                            value={userInfo.correo}
                            disabled
                            className='border rounded-lg px-3 py-2 bg-gray-200 cursor-not-allowed'
                        />
                    </div>

                    {/* Documento */}
                    <div className='flex flex-col'>
                        <label className='text-sm font-medium mb-1'>Documento</label>
                        <input
                            type='text'
                            name='documento'
                            value={userInfo.documento}
                            disabled
                            className='border rounded-lg px-3 py-2 bg-gray-200 cursor-not-allowed'
                        />
                    </div>

                    {/* Dirección */}
                    <div className='flex flex-col'>
                        <label className='text-sm font-medium mb-1'>Direccion</label>
                        <input
                            type='text'
                            name='direccion'
                            value={userInfo.direccion}
                            disabled
                            className='border rounded-lg px-3 py-2 bg-gray-200 cursor-not-allowed'
                        />
                    </div>

                    {/* Teléfono */}
                    <div className='flex flex-col'>
                        <label className='text-sm font-medium mb-1'>Telefono</label>
                        <input
                            type='text'
                            name='telefono'
                            value={userInfo.telefono}
                            onChange={handleChange}
                            className='border rounded-lg px-3 py-2'
                        />
                    </div>

                    {/* Rol */}
                    <div className='flex flex-col'>
                        <label className='text-sm font-medium mb-1'>Rol</label>
                        <select
                            name='rol'
                            value={userInfo.rol}
                            onChange={handleChange}
                            className='border rounded-lg px-3 py-2'>
                            <option value='Administrador'>Administrador</option>
                            <option value='Empleado'>Empleado</option>
                            <option value='Cliente'>Cliente</option>
                        </select>
                    </div>

                    {/* Estado */}
                    <div className='flex flex-col'>
                        <label className='text-sm font-medium mb-1'>Estado</label>
                        <select
                            name='activo'
                            value={userInfo.activo ? 'Activo' : 'Inactivo'}
                            onChange={(e) =>
                                setUserInfo({ ...userInfo, activo: e.target.value === 'Activo' })
                            }
                            className='border rounded-lg px-3 py-2'>
                            <option value='Activo'>Activo</option>
                            <option value='Inactivo'>Inactivo</option>
                        </select>
                    </div>

                    {/* Botones */}
                    <div className='flex justify-center gap-4 mt-6'>
                        <button
                            type='submit'
                            className='px-6 py-2 rounded-lg bg-amber-100 hover:bg-amber-200'>
                            Guardar Cambios
                        </button>
                        <button
                            type='button'
                            onClick={onClose}
                            className='px-6 py-2 rounded-lg bg-gray-400 text-white hover:bg-gray-500'>
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditUserModal;
 