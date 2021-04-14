import { makeRequest } from './API';

export const TABLAS = {
    MARCA: 'marcas',
    PAIS: 'paises',
    PROVEEDORES: 'proveedores',
    CAJAS: 'facturas',
    COMESTIBLES: "comestibles",
    DESECHABLES: "desechables",
    MESAS: "mesas",
    BEBIDA_CALIENTE: "bebidasCalientes",
    BEBIDA_GASEOSA: "bebidasGaseosas",
    BEBIDA_HELADA: "bebidasHeladas",
    BITACORA: "bitacora",
    BUFFET: "buffet",
    CLIENTE: "clientes",
    CONSECUTIVO: "consecutivos",
    EMPLEADO: "empleados",
    ESPECIALIDAD: "especialidades",
    FACTURA: "facturas",
    LICOR: "licores",
    LIMPIEZA: "limpieza",
    PERSONAL: "personal",
    PUESTO: "puestos",
    RESTAURANTE: "restaurantes",
    ROL: "roles",
    TECNOLOGIA: "tecnologia",
    UNIDAD_DE_MEDIDA: "unidadesDeMedida",
    UTENSILIO: "utensilios",
    VINO: "vinos",
    USUARIO: "usuarios",
};

export const ROLES = {
    ADMIN: "Administrador",
    SEGURIDAD: "Seguridad",
    RESTAURANTE: "Restaurante",
    CONTABILIDAD: "Contabilidad"
};

export const STATUS_MESA = {
    LIBRE: "LIBRE",
    OCUPADA: "OCUPADA",
    RESERVADA: "RESERVADA"
};

export function formatearFecha(fecha) {
    const fechaInicial = new Date(`${fecha} 00:00`);
    const fechaFormateada = [fechaInicial.getMonth() + 1, fechaInicial.getDate(), fechaInicial.getFullYear()].join('/');
    return fechaFormateada;
};

export function esNumeroValido(valor) {
    if (valor && typeof valor !== 'undefined') {
        return true;
    }
    return false;
}

export function restarTiempos(inicio, final) {
    if (inicio && final) {
        const totalMinutes = function (value) {
            var match = (/(\d{1,2}):(\d{1,2})/g).exec(value);
            return (Number(match[1]) * 60) + Number(match[2]);
        }
        const diferenciaMinutos = totalMinutes(final) - totalMinutes(inicio);
        const hora = Math.floor(diferenciaMinutos / 60);
        const minutos = diferenciaMinutos % 60;
        return hora + ':' + minutos;
    }
    return '00:00'
}

export function insertarBitacora(token, usuario, descripcion) {
    const hoy = new Date();
    const hoyFormato = [hoy.getMonth() + 1, hoy.getDate(), hoy.getFullYear()].join('/') + ' ' +
        [hoy.getHours(), hoy.getMinutes()].join(':');
    const data = {
        fechaHora: hoyFormato,
        descripcion: descripcion,
        usuario: usuario
    }
    makeRequest('POST', '/bitacora/add', token, data);
};
