'use client';
import React, { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { CiTrash } from 'react-icons/ci';
import CreateModal from '@/components/admin/ventas/cotizaciones/CreateModal';
import FinishModal from '@/components/admin/ventas/cotizaciones/FinishModal';

interface ServicesProps {
    type: string;
    observations: string;
    value: number;
}

function Page() {
    const [servicios, setServicios] = useState<ServicesProps[]>([]);
    const [userInfo, setUserInfo] = useState({
        nombre: '',
        correo: '',
        direccion: '',
        telefono: '',
    });
    const [modalOpen, setModalOpen] = useState(false);
    const [modalFinish, setModalFinish] = useState(false);

    const agregarServicio = () => {
        setServicios((prev) => [...prev, { type: '', observations: '', value: 0 }]);
    };

    const eliminarServicio = (index: number) => {
        setServicios((prev) => prev.filter((_, i) => i !== index));
    };

    const handleChangeService = (
        index: number,
        field: keyof ServicesProps,
        value: string | number
    ) => {
        setServicios((prev) => prev.map((s, i) => (i === index ? { ...s, [field]: value } : s)));
    };

    const terminarCotizacion = () => {
        setModalFinish(true);
    };

    return (
        <div className='w-full'>
            <header className='mt-23 pl-20 max-md:pl-6 max-md:mt-10 text-center md:text-left'>
                <h2 className='text-2xl md:text-4xl font-semibold'>Gestion de Cotizacion</h2>
            </header>

            {/* Actions */}
            <p
                className='flex items-center border border-primary bg-primary px-6 py-2 w-fit mt-10 ml-20 max-md:ml-6 gap-3 md:gap-6 rounded-xl text-white cursor-pointer text-base md:text-lg'
                onClick={() => setModalOpen(true)}>
                <IoIosAddCircleOutline
                    className='cursor-pointer'
                    size={25}
                />
                Crear Nueva Cotizacion
            </p>

            {/* Informacion de cliente */}
            <section className='mx-6 md:mx-20 mt-10 bg-secondary rounded-lg p-4'>
                <h3 className='text-xl md:text-3xl mb-4'>Informacion del cliente</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-120 md:gap-y-20 place-items-center place-content-center md:h-[15rem]'>
                    <p>{userInfo.nombre}</p>
                    <p>{userInfo.correo}</p>
                    <p>{userInfo.telefono}</p>
                    <p>{userInfo.direccion}</p>
                </div>
            </section>

            {/* Servicios */}
            <section className='mt-5 mx-6 md:mx-20'>
                {/* Encabezado */}
                <div className='hidden md:grid grid-cols-4 place-items-center'>
                    <p>SERVICIO</p>
                    <p>OBSERVACIONES</p>
                    <p>VALOR</p>
                    <IoIosAddCircleOutline
                        size={30}
                        cursor={'pointer'}
                        onClick={agregarServicio}
                    />
                </div>

                {/* Lista servicios */}
                <section className='h-70 overflow-y-auto w-full'>
                    {servicios.map((servicio, index) => (
                        <div
                            key={index}
                            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-5 items-center w-full'>
                            {/* Select Servicio */}
                            <select
                                name='servicios'
                                value={servicio.type}
                                onChange={(e) => handleChangeService(index, 'type', e.target.value)}
                                className='border rounded-lg py-2 px-4 w-full md:w-auto'>
                                <option value=''>Seleccione</option>
                                <option value='Reparacion'>Reparacion</option>
                                <option value='Fabricacion'>Fabricacion</option>
                                <option value='Tapiceria'>Tapiceria</option>
                            </select>

                            {/* Observaciones */}
                            <input
                                type='text'
                                value={servicio.observations}
                                onChange={(e) =>
                                    handleChangeService(index, 'observations', e.target.value)
                                }
                                className='border rounded-lg py-2 px-3 w-full'
                                placeholder='Observaciones'
                            />

                            {/* Valor */}
                            <input
                                type='number'
                                value={servicio.value}
                                onChange={(e) =>
                                    handleChangeService(index, 'value', Number(e.target.value))
                                }
                                className='border rounded-lg py-2 px-3 w-full appearance-none'
                                placeholder='Valor'
                            />

                            {/* Botón eliminar */}
                            <div className='flex justify-center w-full'>
                                <CiTrash
                                    size={30}
                                    className='cursor-pointer text-red-600 hover:text-red-800'
                                    onClick={() => eliminarServicio(index)}
                                />
                            </div>
                        </div>
                    ))}
                </section>

                <div className='flex justify-center md:justify-end'>
                    <button
                        onClick={terminarCotizacion}
                        className='mt-10 border px-8 md:px-12 py-2 rounded-lg bg-primary text-white cursor-pointer text-base md:text-lg'>
                        Finalizar
                    </button>
                </div>
            </section>

            {/* Modals */}
            <CreateModal
                setUserInfo={setUserInfo}
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            />

            <FinishModal
                isOpen={modalFinish}
                onClose={() => setModalFinish(false)}
                onSubmit={(data) => {
                    console.log('💾 Cotización lista para guardar:', data);
                    setUserInfo({
                        correo: '',
                        direccion: '',
                        nombre: '',
                        telefono: '',
                    });
                    setServicios([]);
                }}
                user={userInfo}
                services={servicios}
            />
        </div>
    );
}

export default Page;
