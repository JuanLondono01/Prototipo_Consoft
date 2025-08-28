import Calendario from '@/components/admin/ventas/pedidos/Calendario';
import React from 'react';

function page() {
    return (
        <div className='w-full'>
            <header className=' mt-23 flex justify-between '>
                <h1 className='text-4xl'>Agenda de pedidos</h1>
                <input type="text" placeholder='Buscar Pedido' className='border mr-2 rounded-xl px-2 w-100' />
            </header>
            <section className='mt-20 grid grid-cols-2 px-10'>
                <Calendario />
                <section className='bg-gray-300 rounded-lg px-4 pt-10 flex flex-col gap-2'>
                    <div className='bg-white grid grid-cols-2 p-2 rounded-xl cursor-pointer '>
                            <p>Cliente: Wilmar Alexander Zapata</p>
                            <p>Numero:123456789</p>
                            <p>Direccion: CL 54B</p>
                            <p>Fecha Inicio: 12/08/2925</p>
                            <p>Fecha Entrega: 10/08/2025</p>
                            <p>Pedido:</p>
                            <p>1. Tapiceria</p>
                            <p>2. Fabricacion</p>
                            <p>3. Reparacion</p>
                            <p>Estado 🟢</p>
                    </div>
                    <div className='bg-white grid grid-cols-2 p-2 rounded-xl cursor-pointer'>
                            <p>Cliente: Wilmar Alexander Zapata</p>
                            <p>Numero:123456789</p>
                            <p>Direccion: CL 54B</p>
                            <p>Fecha Inicio: 12/08/2925</p>
                            <p>Fecha Entrega: 10/08/2025</p>
                            <p>Pedido:</p>
                            <p>1. Tapiceria</p>
                            <p>2. Fabricacion</p>
                            <p>3. Reparacion</p>
                            <p>Estado 🟢</p>
                    </div>
                    <div className='bg-white grid grid-cols-2 p-2 rounded-xl cursor-pointer'>
                            <p>Cliente: Wilmar Alexander Zapata</p>
                            <p>Numero:123456789</p>
                            <p>Direccion: CL 54B</p>
                            <p>Fecha Inicio: 12/08/2925</p>
                            <p>Fecha Entrega: 10/08/2025</p>
                            <p>Pedido:</p>
                            <p>1. Tapiceria</p>
                            <p>2. Fabricacion</p>
                            <p>3. Reparacion</p>
                            <p>Estado 🟢</p>
                    </div>
                    <div className='bg-white grid grid-cols-2 p-2 rounded-xl cursor-pointer'>
                            <p>Cliente: Wilmar Alexander Zapata</p>
                            <p>Numero:123456789</p>
                            <p>Direccion: CL 54B</p>
                            <p>Fecha Inicio: 12/08/2925</p>
                            <p>Fecha Entrega: 10/08/2025</p>
                            <p>Pedido:</p>
                            <p>1. Tapiceria</p>
                            <p>2. Fabricacion</p>
                            <p>3. Reparacion</p>
                            <p>Estado 🟢</p>
                    </div>
                </section>
            </section>
        </div>
    );
}

export default page;
