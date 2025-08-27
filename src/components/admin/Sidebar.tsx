import React from 'react';
import SideLink from './SideLink';

function Sidebar() {
    return (
        <div className='border border-[#6E4424] w-1/5 min-h-screen bg-[#6E4424] flex flex-col items-center justify-evenly text-white px-4 py-2'>
            <SideLink
                text='Desempeño'
                href='/admin/dashboard'
            />
            <SideLink
                text='Ventas'
                href='/admin/ventas'
                subRoutes={["clientes", "cotizacion", "pagos", "pedidos", "productos", "ventas"]}
            />
            <SideLink
                text='Servicios'
                href='/admin/servicios'
            />
            <SideLink
                text='Compras'
                href='/admin/compras'
            />
            <SideLink
                text='Usuarios'
                href='/admin/usuarios'
            />
            <SideLink
                text='Configuracion'
                href='/admin/configuracion'
            />
        </div>
    );
}

export default Sidebar;
