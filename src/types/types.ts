export interface ServicesProps {
    type: string;
    observations: string;
    value: number;
}

export interface UserProps {
    nombre: string;
    correo: string;
    documento: number;
    direccion: string;
    telefono: string;
    rol: string;
    activo: boolean;
}

export interface Order {
    id: string;
    user: UserProps;
    fechaInicio: Date;
    fechaEntrega: Date;
    servicios: ServicesProps[];
    estado: string; // 🟢, 🟡, 🔴
}
