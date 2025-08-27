import Image from 'next/image';
import React from 'react';

function page() {
    return (
        <div className='border w-full'>
            {/* Metricas iniciales */}
            <section className='grid grid-cols-3 mt-10 place-items-center'>
                <div className='border border-gray-200 shadow-lg shadow-gray-300 px-6 py-4 rounded-md flex flex-col justify-between h-30 bg-gray-50'>
                    <p className='font-bold text-xl'>Ganancias Mensuales</p>
                    <p className='font-semibold text-xl'>$695</p>
                </div>

                <div className='border border-gray-200 shadow-lg shadow-gray-300 px-6 py-4 rounded-md flex flex-col justify-between h-30'>
                    <p className='font-bold text-xl'>Pedidos mensuales</p>
                    <p className='font-semibold text-xl'>129</p>
                </div>

                <div className='border border-sky-400 bg-sky-200 shadow px-6 py-4 rounded-md flex flex-col justify-between h-30'>
                    <p className='font-bold text-xl'>Usuarios nuevos este mes</p>
                    <p className='font-semibold text-xl'>1156</p>
                </div>
            </section>
            {/* Tabla de nuevos usuarios */}
            <section className=' place-items-center mt-10 '>
              <Image className='border border-gray-200 shadow-lg rounded-2xl' src={"/Block.png"} width={1500} height={200} alt='Metricas de usuarios nuevos'></Image>
            </section>

            <section className='grid grid-cols-2 place-items-center mt-4 py-6'>
            <Image alt='Servicios mas vendidos' height={600} width={600} src={"/Block.jpg"}></Image>
              <Image alt='Servicios mas vendidos' height={300} width={300} src={"/servicios.jpg"}></Image>
            </section>
        </div>
    );
}

export default page;
