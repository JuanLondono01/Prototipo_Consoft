'use client';

import Calendario from '@/components/admin/services/pedidos/Calendario';
import CreateVisitModal from '@/components/admin/services/visits/CreateVisitModal';
import DetailsVisitModal from '@/components/admin/services/visits/DetailsVisitModal';
import { Order, VisitSProps, VisitStatus } from '@/types/types';
import React, { useState } from 'react';
import { BiCheck } from 'react-icons/bi';
import { HiMiniXMark } from 'react-icons/hi2';

function page() {
    const [createModal, setCreateModal] = useState(false);
    const [visit, setVisit] = useState<VisitSProps>();
    const [details, setDetails] = useState(false);
    const [visits, setVisits] = useState<VisitSProps[]>([
        {
            id: 'alsdkla',
            user: {
                nombre: 'Wilmar Alexander Zapata',
                correo: 'wilmar@example.com',
                documento: 123456,
                direccion: 'CL 54B',
                telefono: '123456789',
                rol: 'cliente',
                activo: true,
            },
            fechaVisita: new Date('2020-02-02'),
            services: [{ type: 'Tapicería' }, { type: 'Fabricación' }, { type: 'Reparación' }],
            status: VisitStatus.CONFIRMED,
        },
    ]);
    return (
        <div className='w-full'>
            <header className='mt-10 px-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
                <h1 className='text-3xl md:text-4xl font-semibold'>AGENDA DE VISITAS</h1>
                <div className='flex gap-4'>
                    <button
                        onClick={() => setCreateModal(true)}
                        className='border rounded-lg px-6 py-2 bg-primary text-white cursor-pointer'>
                        Agendar visita
                    </button>
                    <input
                        type='text'
                        placeholder='Buscar Pedido'
                        className='border rounded-xl px-4 py-2 w-full md:w-80'
                    />
                </div>
            </header>

            {/* Visitas */}
            <section className='grid grid-cols-2 px-6 mt-23'>
                {/* Calendario */}
                <Calendario />

                {/* Lista de pedidos */}
                <section className='bg-gray-100 rounded-lg p-4 flex flex-col gap-4 xl:h-[34rem] 2xl:h-[44rem] overflow-y-auto'>
                    <div className='grid grid-cols-6 place-items-center'>
                        <p>Cliente</p>
                        <p>Numero</p>
                        <p>Direccion</p>
                        <p>Servicio/s</p>
                        <p>Fecha</p>
                        <p>Continuar</p>
                    </div>
                    {visits.map((visit) => (
                        <div
                            onClick={() => {
                                setVisit(visit);
                                setDetails(true);
                            }}
                            key={visit.id}
                            className='grid grid-cols-6 place-items-center bg-white py-2 px-1 rounded-lg cursor-pointer'>
                            <p className='truncate max-w-20'>{visit.user.nombre}</p>
                            <p>{visit.user.telefono}</p>
                            <p>{visit.user.direccion}</p>
                            <p>{visit.services.length > 1 ? 'Varios' : visit.services[0].type}</p>
                            <p>{visit.fechaVisita.toLocaleDateString()}</p>
                            <p className='flex gap-2'>
                                <BiCheck
                                    size={20}
                                    color='green'
                                    cursor={'pointer'}
                                />
                                <HiMiniXMark
                                    size={20}
                                    color='red'
                                    cursor={'pointer'}
                                />
                            </p>
                        </div>
                    ))}
                </section>
            </section>
            <CreateVisitModal
                isOpen={createModal}
                onClose={() => setCreateModal(false)}
            />
            <DetailsVisitModal
                isOpen={details}
                onClose={() => setDetails(false)}
                extraProps={visit}
            />
        </div>
    );
}

export default page;
