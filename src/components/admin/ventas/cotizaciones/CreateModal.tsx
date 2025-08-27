import React, { useState } from 'react';

interface UserProps {
    nombre: string;
    correo: string;
    direccion: string;
    telefono: string;
}

interface ServicesProps {
    type: string;
    observations: string;
    value: number;
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit?: (data: { user: UserProps; Services: Array<ServicesProps> }) => void;
    setUserInfo: (user: UserProps) => void;
}

function CreateModal({ isOpen, onClose, onSubmit, setUserInfo }: ModalProps) {
    // Lista de usuarios simulados (prototipo)
    const usuarios: UserProps[] = [
        {
            nombre: 'Juan Esteban Londoño Uribe',
            correo: 'correo@cliente.com',
            telefono: '123456789',
            direccion: 'Av. Siempre Viva',
        },
        {
            nombre: 'Maria Pérez',
            correo: 'maria@cliente.com',
            telefono: '987654321',
            direccion: 'Calle 123',
        },
        {
            nombre: 'Carlos Gómez',
            correo: 'carlos@cliente.com',
            telefono: '555666777',
            direccion: 'Cra 45 #12-34',
        },
    ];

    const [user, setUser] = useState<UserProps>({
        nombre: '',
        correo: '',
        direccion: '',
        telefono: '',
    });

    if (!isOpen) return null;

    const handleSelectUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedName = e.target.value;
        const selectedUser = usuarios.find((u) => u.nombre === selectedName);

        if (selectedUser) {
            setUser(selectedUser);
        } else {
            setUser((prev) => ({ ...prev, nombre: selectedName })); // Si escribe manual
        }
    };

    const handleSubmit = () => {
        if (onSubmit) {
            onSubmit({ user, Services: [] }); // services vacío por ahora
        }
        onClose();
        setUserInfo(user);
    };

    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50'>
            <div className='bg-white p-6 rounded-xl w-[450px] relative shadow-lg'>
                <h2 className='text-xl font-semibold mb-6 text-center'>Crear Cotización</h2>

                <div className='flex flex-col gap-4'>
                    {/* Cliente con datalist */}
                    <div>
                        <label className='block text-sm font-medium mb-1'>Cliente</label>
                        <input
                            list='clientes'
                            name='nombre'
                            value={user.nombre}
                            onChange={handleSelectUser}
                            className='w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-primary'
                        />
                        <datalist id='clientes'>
                            {usuarios.map((u) => (
                                <option
                                    key={u.nombre}
                                    value={u.nombre}
                                />
                            ))}
                        </datalist>
                    </div>

                    <div>
                        <label className='block text-sm font-medium mb-1'>Correo</label>
                        <input
                            type='email'
                            name='correo'
                            value={user.correo}
                            readOnly
                            className='w-full border rounded-lg px-3 py-2 bg-gray-100'
                        />
                    </div>

                    <div>
                        <label className='block text-sm font-medium mb-1'>Teléfono</label>
                        <input
                            type='text'
                            name='telefono'
                            value={user.telefono}
                            readOnly
                            className='w-full border rounded-lg px-3 py-2 bg-gray-100'
                        />
                    </div>

                    <div>
                        <label className='block text-sm font-medium mb-1'>Dirección</label>
                        <input
                            type='text'
                            name='direccion'
                            value={user.direccion}
                            readOnly
                            className='w-full border rounded-lg px-3 py-2 bg-gray-100'
                        />
                    </div>
                </div>

                {/* Botones */}
                <div className='flex justify-center gap-4 mt-6'>
                    <button
                        onClick={handleSubmit}
                        className='bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90'>
                        Guardar
                    </button>
                    <button
                        onClick={onClose}
                        className='bg-gray-300 px-6 py-2 rounded-lg hover:bg-gray-400'>
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateModal;
