import { colors } from '../config';

export const gustos = {
    MUSICA: 'Musica',
    DEPORTES: 'Deportes',
    AIRE_LIBRE: 'Aire libre',
    VIDEOJUEGOS: 'Videojuegos',
    SALIR_DE_FIESTA: 'Salir de fiesta',
};

export const actividades = {
    REGALO: 'Regalo',
    INVITACION: 'Invitacion',
};

// TODO -> tal vez esto ver que
// nos pusieron en la encuesta
export const giftType = {
    CANDY: 'Dulces',
    FLOWER: 'Flores',
    DRINKS: 'Bebidas',
};

const mensajes = {
    1: {
        conversacion: [{ senderMe: false, mensaje: 'hola!!', fecha: new Date('2021-07-21T21:00') }],
    },
    3: {
        conversacion: [
            { senderMe: false, mensaje: 'hola! como va?', fecha: new Date('2021-06-21T22:00') },
        ],
    },
    6: {
        conversacion: [{ senderMe: false, mensaje: 'holuu', fecha: new Date('2021-07-23T19:00') }],
    },
};

const misActividades = {
    1: {
        agenda: [
            { senderMe: false, tipo: actividades.INVITACION, fecha: new Date('2021-07-21T21:00') },
        ],
    },
};

const listaDeActividades = [
    {
        id: 0,
        usuarioId: 1,
        senderMe: false,
        tipo: actividades.INVITACION,
        fecha: new Date('2021-07-21T21:00'),
        pub: { name: 'Jobs' },
    },
];

const usuarios = [
    {
        id: 0,
        nombre: 'Sergio Aguero',
        edad: 40,
        colorCard: colors.DARK_PINK,
        ciudad: 'Buenos Aires',
        gustos: [gustos.SALIR_DE_FIESTA, gustos.VIDEOJUEGOS, gustos.AIRE_LIBRE],
        meDioLike: false,
        leDiLike: false,
        descripcion:
            'Busco alguien que comparta mi pasión por el running (y que me pueda seguir el paso). Paso mi tiempo libre en los juegos online, mas que nada en el CS.',
    },
    {
        id: 1,
        nombre: 'Lionel Messi',
        edad: 21,
        colorCard: colors.YELLOW,
        ciudad: 'Rosario',
        gustos: [gustos.DEPORTES, gustos.VIDEOJUEGOS],
        meDioLike: true,
        leDiLike: true,
        descripcion:
            'Busco alguien que comparta mi pasión por el running (y que me pueda seguir el paso). Paso mi tiempo libre en los juegos online, mas que nada en el CS.',
    },
    {
        id: 2,
        nombre: 'Roman Riquelme',
        edad: 37,
        colorCard: colors.YELLOW,
        ciudad: 'Buenos Aires',
        gustos: [gustos.SALIR_DE_FIESTA, gustos.VIDEOJUEGOS, gustos.AIRE_LIBRE],
        meDioLike: true,
        leDiLike: false,
        descripcion:
            'Busco alguien que comparta mi pasión por el running (y que me pueda seguir el paso). Paso mi tiempo libre en los juegos online, mas que nada en el CS.',
    },
    {
        id: 3,
        nombre: 'Facundo Torraca',
        edad: 22,
        colorCard: colors.BLUE,
        ciudad: 'Buenos Aires',
        gustos: [gustos.SALIR_DE_FIESTA, gustos.VIDEOJUEGOS, gustos.AIRE_LIBRE],
        meDioLike: true,
        leDiLike: true,
        descripcion: 'Soy de virgo',
    },
    {
        id: 4,
        nombre: 'Ramiro German',
        edad: 22,
        colorCard: colors.ORANGE,
        ciudad: 'Buenos Aires',
        gustos: [gustos.SALIR_DE_FIESTA, gustos.VIDEOJUEGOS, gustos.AIRE_LIBRE],
        meDioLike: true,
        leDiLike: false,
        descripcion: 'blblblblblblb',
    },
    {
        id: 5,
        nombre: 'Rodrigo Santiago',
        edad: 22,
        colorCard: colors.PINK,
        ciudad: 'Buenos Aires',
        gustos: [gustos.VIDEOJUEGOS, gustos.AIRE_LIBRE],
        meDioLike: false,
        leDiLike: true,
        descripcion: 'Saa',
    },
    {
        id: 6,
        nombre: 'Roberto Cahu',
        edad: 22,
        colorCard: colors.BLUE,
        ciudad: 'Buenos Aires',
        gustos: [gustos.SALIR_DE_FIESTA, gustos.VIDEOJUEGOS],
        meDioLike: true,
        leDiLike: true,
        descripcion: 'Soy de virgo',
    },
];

export const initialState = {
    usuario: { autorizado: false, id: 9000, nombre: 'Barbara' },

    caracteristicasPago: {
        numeroTarjeta: 123134141,
        banco: 'Santander Rio',
        premium: true,
    },

    lugares: [{ nombre: 'Vita', direccion: 'Palermo', Estrellas: 4, tipo: 'Pub' }],
    regalos: [{ nombre: 'Caja de bombones', precio: 500, tipo: 'Dulces' }],

    mensajes: mensajes,
    misActividades: misActividades,
    listaDeActividades: listaDeActividades,
    usuariosTotales: usuarios,
    app: { idUsuarioChat: null },
};
