export interface ServicesProps {
    id?: string;
    type?: string;
    description?: string;
    observations?: string;
    value?: number;
    status?: boolean;
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

export interface venta {
    id: string;
    order: Order;
}

export interface SaleInfoProps {
    isOpen: boolean;
    onClose: () => void;
    sale?: venta;
}

export interface DefaultModalProps<T = {}> {
    isOpen: boolean;
    onClose: () => void;
    extraProps?: T;
}

export enum InputTypes {
    TEXT = 'text',
    EMAIL = 'email',
    PASWORD = 'password',
    DATE = 'date',
    CHECK = 'checkbox',
}
export interface InputFormProps {
    type: InputTypes;
    label?: string;
    id: string;
    value?: any;
}

export enum VisitStatus {
    PENDING = 'Pendiente',
    CANCELLED = 'Cancelada',
    CONFIRMED = 'Confirmada',
}

export interface VisitSProps {
    id: string;
    user: UserProps;
    services: ServicesProps[];
    fechaVisita: Date;
    status: VisitStatus;
}

export interface CategoryProps {
    id: string;
    category: string;
    desctiption: string;
    status: boolean;
    imageUrl: string
}

export interface ProductProps {
    id: string;
    product: string;
    description: string;
    category: CategoryProps;
    imageUrl: string;
    status: boolean;
}
