'use client';
import React, { useState, useEffect } from 'react';
import { Order, ServicesProps } from '@/types/types';

interface EditPedidoModalProps {
    isOpen: boolean;
    onClose: () => void;
    pedido?: Order;
}

function EditOrderModal({ isOpen, onClose, pedido }: EditPedidoModalProps) {
    const [pedidoInfo, setPedidoInfo] = useState<Order | undefined>(pedido);

    useEffect(() => {
        setPedidoInfo(pedido);
    }, [pedido]);

    if (!isOpen || !pedidoInfo) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setPedidoInfo({ ...pedidoInfo, [name]: value });
    };

    const handleServicioChange = (
        index: number,
        field: keyof ServicesProps,
        value: string | number
    ) => {
        const updatedServicios = [...pedidoInfo.servicios];
        updatedServicios[index] = { ...updatedServicios[index], [field]: value };
        setPedidoInfo({ ...pedidoInfo, servicios: updatedServicios });
    };

    const formatDate = (date: Date | string) => {
        const d = new Date(date);
        return !isNaN(d.getTime()) ? d.toISOString().split('T')[0] : '';
    };

    return (
        <div className="modal-background py-10 px-4 flex justify-center items-center">
            <div className="modal-frame w-full max-w-lg h-fit">
                <h3 className="text-xl font-semibold text-center mb-6">
                    EDITAR INFORMACIÓN DEL PEDIDO
                </h3>

                <form className="flex flex-col gap-4">
                    {/* Cliente */}
                    <div className="flex flex-col">
                        <label htmlFor="cliente" className="text-sm font-medium mb-1">
                            Cliente
                        </label>
                        <input
                            id="cliente"
                            type="text"
                            value={pedidoInfo.user.nombre}
                            disabled
                            className="border rounded-lg px-3 py-2 bg-gray-200 cursor-not-allowed"
                        />
                    </div>

                    {/* Teléfono */}
                    <div className="flex flex-col">
                        <label htmlFor="telefono" className="text-sm font-medium mb-1">
                            Teléfono
                        </label>
                        <input
                            id="telefono"
                            type="text"
                            value={pedidoInfo.user.telefono}
                            onChange={(e) =>
                                setPedidoInfo({
                                    ...pedidoInfo,
                                    user: { ...pedidoInfo.user, telefono: e.target.value },
                                })
                            }
                            className="border rounded-lg px-3 py-2"
                        />
                    </div>

                    {/* Dirección */}
                    <div className="flex flex-col">
                        <label htmlFor="direccion" className="text-sm font-medium mb-1">
                            Dirección
                        </label>
                        <input
                            id="direccion"
                            type="text"
                            value={pedidoInfo.user.direccion}
                            disabled
                            className="border rounded-lg px-3 py-2 bg-gray-200 cursor-not-allowed"
                        />
                    </div>

                    {/* Fechas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="fechaInicio" className="text-sm font-medium mb-1">
                                Fecha de inicio
                            </label>
                            <input
                                id="fechaInicio"
                                type="date"
                                name="fechaInicio"
                                value={formatDate(pedidoInfo.fechaInicio)}
                                onChange={(e) =>
                                    setPedidoInfo({
                                        ...pedidoInfo,
                                        fechaInicio: new Date(e.target.value),
                                    })
                                }
                                className="border rounded-lg px-3 py-2"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="fechaEntrega" className="text-sm font-medium mb-1">
                                Fecha de entrega
                            </label>
                            <input
                                id="fechaEntrega"
                                type="date"
                                name="fechaEntrega"
                                value={formatDate(pedidoInfo.fechaEntrega)}
                                onChange={(e) =>
                                    setPedidoInfo({
                                        ...pedidoInfo,
                                        fechaEntrega: new Date(e.target.value),
                                    })
                                }
                                className="border rounded-lg px-3 py-2"
                            />
                        </div>
                    </div>

                    {/* Servicios */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium mb-1">Servicios</label>
                        {pedidoInfo.servicios.map((servicio: ServicesProps, index: number) => (
                            <div
                                key={index}
                                className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center"
                            >
                                <input
                                    type="text"
                                    value={servicio.type}
                                    onChange={(e) =>
                                        handleServicioChange(index, 'type', e.target.value)
                                    }
                                    className="border rounded-lg px-3 py-2 w-full"
                                    placeholder="Tipo"
                                />
                                <input
                                    type="text"
                                    value={servicio.observations}
                                    onChange={(e) =>
                                        handleServicioChange(index, 'observations', e.target.value)
                                    }
                                    className="border rounded-lg px-3 py-2 w-full"
                                    placeholder="Observaciones"
                                />
                                <input
                                    type="number"
                                    value={servicio.value}
                                    onChange={(e) =>
                                        handleServicioChange(index, 'value', Number(e.target.value))
                                    }
                                    className="border rounded-lg px-3 py-2 w-full md:w-28"
                                    placeholder="Valor"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Estado */}
                    <div className="flex flex-col">
                        <label htmlFor="estado" className="text-sm font-medium mb-1">
                            Estado
                        </label>
                        <select
                            id="estado"
                            name="estado"
                            value={pedidoInfo.estado}
                            onChange={handleChange}
                            className="border rounded-lg px-3 py-2"
                        >
                            <option value="🟢">Activo</option>
                            <option value="🟡">Pendiente</option>
                            <option value="🔴">Cancelado</option>
                        </select>
                    </div>

                    {/* Botones */}
                    <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-lg bg-amber-100 hover:bg-amber-200"
                        >
                            Guardar Cambios
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-2 rounded-lg bg-gray-400 text-white hover:bg-gray-500"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditOrderModal;
