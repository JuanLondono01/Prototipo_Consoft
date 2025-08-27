'use clien';
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import EditUserModal from './EditUserModal';
import Swal from 'sweetalert2';

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

function UserInfoModal({ isOpen, onClose, user }: UserModalProps) {
    if (!isOpen) return null;
    const [editModal, setEditModal] = useState(false);

    const deleteUser = () => {
        Swal.fire({
            icon: 'warning',
            title: '¿Esta seguro de eliminar este usuario?',
            html: 'Esta accion no se puede revertir',
            showConfirmButton: true,
            confirmButtonText: 'Eliminar Usuario',
            confirmButtonColor: 'red',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Usuario eliminado correctamente',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1000,
                });
                onClose();
            }
        });
    };

    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50'>
            <div className='bg-white p-6 rounded-xl w-[1050px] h-[900px] relative flex flex-col justify-evenly'>
                {/* Botón cerrar */}
                <button
                    onClick={onClose}
                    className='absolute top-4 left-4 text-2xl text-gray-500 hover:text-black cursor-pointer'>
                    <IoMdClose />
                </button>

                <h3 className='text-xl font-semibold text-center mb-4'>VER DETALLES DEL USUARIO</h3>
                <div className='flex flex-col gap-12 text-2xl items-center'>
                    <p>Nombre: {user?.nombre}</p>
                    <p>Correo: {user?.correo}</p>
                    <p>Documento: {user?.documento}</p>
                    <p>Direccion: {user?.direccion}</p>
                    <p>Telefono: {user?.telefono}</p>
                    <p>Rol: {user?.rol}</p>
                    <p>Usuario activo: {user?.activo ? '🟢' : '🔴'}</p>
                    <div className='grid grid-cols-2 gap-8 w-full'>
                        <button
                            className='px-6 py-2 rounded-lg bg-amber-100 cursor-pointer text-lg'
                            onClick={() => setEditModal(true)}>
                            Editar Usuario
                        </button>
                        <button
                            className='px-6 py-2 rounded-lg bg-red-600 text-white cursor-pointer text-lg'
                            onClick={() => deleteUser()}>
                            Eliminar Usuario
                        </button>
                    </div>
                </div>
            </div>
            <EditUserModal
                isOpen={editModal}
                onClose={() => setEditModal(false)}
                user={user}
            />
        </div>
    );
}

export default UserInfoModal;
