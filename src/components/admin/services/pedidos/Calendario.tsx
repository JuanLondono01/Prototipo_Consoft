'use client';
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
    {
        title: 'Inicio de proyecto',
        start: new Date(2025, 7, 27), // 28 Agosto 2025
        end: new Date(2025, 7, 28),
        status: 'inicio',
    },
    {
        title: 'Proyecto cancelado',
        start: new Date(2025, 7, 30),
        end: new Date(2025, 7, 30),
        status: 'cancelado',
    },
    {
        title: 'Proyecto completado',
        start: new Date(2025, 8, 2),
        end: new Date(2025, 8, 2),
        status: 'completado',
    },
];

// Función para aplicar estilos a cada evento
const eventStyleGetter = (event: any) => {
    let backgroundColor = '';

    switch (event.status) {
        case 'inicio':
            backgroundColor = 'yellow';
            break;
        case 'cancelado':
            backgroundColor = 'red';
            break;
        case 'completado':
            backgroundColor = 'green';
            break;
        default:
            backgroundColor = 'blue';
    }

    return {
        style: {
            backgroundColor,
            color: 'black',
            borderRadius: '8px',
            padding: '2px',
            border: 'none',
        },
    };
};

export default function Calendario() {
    return (
        <div className='h-[70vh] w-[90%] mx-auto'>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor='start'
                endAccessor='end'
                eventPropGetter={eventStyleGetter}
            />
        </div>
    );
}
