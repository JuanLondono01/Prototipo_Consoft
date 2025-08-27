import React from 'react';

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

interface QuoteProps {
    user: UserProps;
    services: ServicesProps[];
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit?: (data: QuoteProps) => void;
    user: UserProps;
    services: ServicesProps[];
}

function FinishModal({ isOpen, onClose, onSubmit, user, services }: ModalProps) {
    if (!isOpen) return null;

    const handleSave = () => {
        if (onSubmit) {
            onSubmit({ user, services });
        }
        onClose();
    };

    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50'>
            <div className='bg-white p-6 rounded-xl w-[500px] relative shadow-lg'>
                <h2 className='text-xl font-semibold mb-4'>Confirmar Cotización</h2>

                <div className='mb-4'>
                    <h3 className='font-semibold'>Cliente</h3>
                    <p>{user.nombre}</p>
                    <p>{user.correo}</p>
                    <p>{user.telefono}</p>
                    <p>{user.direccion}</p>
                </div>

                <div className='mb-4'>
                    <h3 className='font-semibold'>Servicios</h3>
                    <ul className='list-disc pl-5'>
                        {services.map((s, i) => (
                            <li key={i}>
                                {s.type} - {s.observations} - ${s.value}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='flex justify-end gap-4 mt-6'>
                    <button
                        onClick={handleSave}
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

export default FinishModal;
