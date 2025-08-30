import React from 'react';
import SideLink from './SideLink';

function Sidebar() {
    return (
        <div className='border border-primary w-1/5 min-h-screen bg-primary flex flex-col items-center justify-evenly text-white px-4 py-2'>
            <SideLink
                text='Desempeño'
                href='/admin/dashboard'
            />
            <SideLink
                text='Ventas'
                href='/admin/ventas'
                subRoutes={["usuarios", "cotizacion", "pagos", "ventas"]}
            />
            <SideLink
                text='Servicios'
                href='/admin/servicios'
                subRoutes={["pedidos", "servicios", "visitas"]}
            />
            <SideLink
                text='Compras'
                href='/admin/compras'
                subRoutes={["productos", "categorias"]}
            />
            <SideLink
                text='Configuracion'
                href='/admin/configuracion'
            />
        </div>
    );
}

export default Sidebar;
