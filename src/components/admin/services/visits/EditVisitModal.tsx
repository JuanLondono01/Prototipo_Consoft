import React from 'react';
import InputForm from '../../global/InputForm';
import { DefaultModalProps, InputTypes, VisitSProps, VisitStatus } from '@/types/types';
import { IoMdClose } from 'react-icons/io';

function EditVisitModal({ isOpen, onClose, extraProps }: DefaultModalProps<VisitSProps>) {
    if (!isOpen) return;


    return (
        <div className='modal-background'>
            <div className='modal-frame w-[500px]'>
                <header className='w-fit mx-auto'>
                    <button
                        onClick={onClose}
                        className='absolute top-4 left-4 text-2xl text-gray-500 hover:text-black cursor-pointer'>
                        <IoMdClose />
                    </button>
                    <h3 className='text-2xl font-semibold'>EDITAR VISITA</h3>
                </header>

                <form>
                    <InputForm
                        id='cliente'
                        type={InputTypes.TEXT}
                        label='Cliente'
                        value={extraProps?.user.nombre}
                    />
                    <InputForm
                        id='direccion'
                        type={InputTypes.TEXT}
                        label='Direccion'
                        value={extraProps?.user.direccion}
                    />
                    <InputForm
                        id='telefono'
                        type={InputTypes.TEXT}
                        label='Telefono'
                        value={extraProps?.user.telefono}
                    />

                    <select className='py-2 border w-full mt-4 rounded-lg'>
                        <option selected={extraProps?.status == VisitStatus.CONFIRMED} value={VisitStatus.CONFIRMED}>🟢 Visita Confirmada</option>
                        <option selected={extraProps?.status == VisitStatus.PENDING} value={VisitStatus.PENDING}>🟡 Visita Pendiente</option>
                        <option selected={extraProps?.status == VisitStatus.CANCELLED} value={VisitStatus.CANCELLED}>🔴 Visita cancelada</option>
                    </select>

                    <div className='my-2 py-2'>
                        <p className='text-xl'>Servicios</p>
                        <InputForm
                            type={InputTypes.CHECK}
                            id='Tapiceria'
                            label='1. Tapiceria'
                        />
                        <InputForm
                            type={InputTypes.CHECK}
                            id='Fabricacion'
                            label='2. Fabricacion'
                        />
                        <InputForm
                            type={InputTypes.CHECK}
                            id='Reparacion'
                            label='3. Reparacion'
                        />
                    </div>

                    <InputForm
                        id='fecha'
                        type={InputTypes.DATE}
                        label='Fecha de visita'
                        value={extraProps?.fechaVisita}
                    />

                    <div className='w-full flex justify-between mt-10'>
                        <button className='border border-white rounded-lg px-6 py-2 bg-secondary cursor-pointer'>
                            Agendar visita
                        </button>
                        <button
                            onClick={onClose}
                            className='border rounded-lg px-6 py-2 text-white bg-gray-300 cursor-pointer'>
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditVisitModal;
