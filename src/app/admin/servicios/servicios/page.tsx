'use client';
import CreateService from '@/components/admin/services/services/CreateService';
import ServiceInfo from '@/components/admin/services/services/ServiceInfo';
import { ServicesProps } from '@/types/types';
import React, { useState } from 'react';

function page() {
    const [services, setServices] = useState<ServicesProps[]>([
        {
            id: 'lskadklas',
            type: 'Reparacion',
            description: 'None',
            status: true,
        },
    ]);

    const [createModal, setCreateModal] = useState(false);
    const [detailsModal, setDetailsModal] = useState(false);
    const [service, setService] = useState<ServicesProps>();

    return (
        <div className='w-full'>
            <header className='mt-23'>
                <h1 className='text-4xl'>GESTION DE SERVICIOS</h1>
            </header>
            {/* Actions */}
            <section className='w-fit ml-auto'>
                <button
                    onClick={() => setCreateModal(true)}
                    className='px-6 py-2 rounded-lg bg-primary text-white mr-2 cursor-pointer'>
                    Agregar servicio
                </button>
                <input
                    type='text'
                    className='border px-2 py-2 rounded-lg w-70 mr-2'
                    placeholder='Buscar servicios'
                />
            </section>

            <section className='px-8 mt-32'>
                <div className='grid grid-cols-4 place-items-center px-6'>
                    <p>Codigo</p>
                    <p>Servicio</p>
                    <p>Descripcion</p>
                    <p>Estado</p>
                </div>
                <div className='bg-gray-300 px-6 min-h-100 pt-6 rounded-lg'>
                    {services.map((service) => (
                        <div
                            onClick={() => {
                                setService(service);
                                setDetailsModal(true);
                            }}
                            key={service.id}
                            className='grid grid-cols-4 place-items-center bg-white py-4 rounded-xl hover:bg-gray-100 cursor-pointer'>
                            <p>{service.id}</p>
                            <p>{service.type}</p>
                            <p>{service.description}</p>
                            <p>{service.status ? '🟢' : '🔴'}</p>
                        </div>
                    ))}
                </div>
            </section>
            <CreateService
                isOpen={createModal}
                onClose={() => setCreateModal(false)}
            />
            <ServiceInfo
                isOpen={detailsModal}
                onClose={() => setDetailsModal(false)}
                extraProps={service}
            />
        </div>
    );
}

export default page;
