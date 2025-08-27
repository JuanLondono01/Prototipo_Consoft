'use client';
import CreateUserModal from '@/components/admin/ventas/users/CreateUserModal';
import UserInfoModal from '@/components/admin/ventas/users/UserInfoModal';
import React, { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

interface UserProps {
    nombre: string;
    correo: string;
    documento: number;
    direccion: string;
    telefono: string;
    rol: string;
    activo: boolean;
}

function page() {
    const [createModal, setCreateModal] = useState(false);
    const [detailsModal, setDetailsModal] = useState(false);
    const [user, setUser] = useState<UserProps>();
    const testUsers = [
        {
            nombre: 'Juan Esteban',
            correo: 'correo@Cliente.com',
            documento: 12345,
            direccion: 'Calle 123',
            telefono: '3001234567',
            rol: 'Administrador',
            activo: true,
        },
        {
            nombre: 'María López',
            correo: 'maria@cliente.com',
            documento: 67890,
            direccion: 'Carrera 45',
            telefono: '3017654321',
            rol: 'Empleado',
            activo: false,
        },
    ];

    return (
        <div className='w-full'>
            <header className='mt-23 pl-20'>
                <h2 className='text-4xl font-semibold'>Gestion de Usuarios</h2>
            </header>
            {/* Actions */}
            <section className='mt-20 flex place-items-center justify-between px-21'>
                {/* Agregar usuario */}
                <div
                    className='flex place-items-center  w-fit px-4 py-1 rounded-xl gap-x-2 bg-[#6E4424] cursor-pointer'
                    onClick={() => setCreateModal(true)}>
                    <IoIosAddCircleOutline
                        className='cursor-pointer'
                        size={30}
                        color='white'
                    />
                    <p className='text-xl text-white'>Agregar nuevo usaurio</p>
                </div>

                {/* Buscar usuarios */}
                <div>
                    <datalist id='user_list'>
                        {testUsers.map((user) => (
                            <option
                                key={testUsers.indexOf(user)}
                                value={user.nombre}>
                                {user.nombre}
                            </option>
                        ))}
                    </datalist>
                    <input
                        type='text'
                        list='user_list'
                        className='border py-1 px-4 rounded-xl w-70'
                        placeholder='Buscar Clientes'
                    />
                </div>
            </section>
            {/* Tabla de usuarios */}
            <section className='mt-25 px-20 '>
                <div className='grid grid-cols-4 place-items-center pb-4'>
                    <p>Nombre</p>
                    <p>Correo</p>
                    <p>Estado</p>
                    <p>Rol</p>
                </div>
                <div className='bg-gray-300 h-140 rounded-lg px-4 flex flex-col gap-2 pt-4'>
                    {testUsers.map((user) => (
                        <div
                            key={testUsers.indexOf(user)}
                            onClick={() => {
                                setUser(user);
                                setDetailsModal(true);
                            }}
                            className='grid grid-cols-4 place-items-center bg-white h-13 rounded-lg cursor-pointer'>
                            <p>{user.nombre}</p>
                            <p>{user.correo}</p>
                            <p>{user.activo ? "🟢" : "🔴"}</p>
                            <p>{user.rol}</p>
                        </div>
                    ))}
                </div>
            </section>
            <CreateUserModal
                isOpen={createModal}
                onClose={() => setCreateModal(false)}
            />
            <UserInfoModal
                user={user}
                isOpen={detailsModal}
                onClose={() => setDetailsModal(false)}
            />
        </div>
    );
}

export default page;
