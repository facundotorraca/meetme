const mensajes = [
    {
        idUsuario: {
            conversacion: [
                { senderMe: true, mensaje: 'hola!!', fecha: new Date('2021-07-21T21:00') },
            ],
        },
    },
];

export const gustos = {
    MUSICA: 'Musica',
    DEPORTES: 'Deportes',
    AIRE_LIBRE: 'Aire libre',
    VIDEOJUEGOS: 'Videojuegos',
    SALIR_DE_FIESTA: 'Salir de fiesta',
};

export const initialState = {
    usuario: { autorizado: false },

    caracteristicasUsuario: {
        nombre: '',
        apellido: '',
        edad: '',
        gustos: [gustos.VIDEOJUEGOS, gustos.AIRE_LIBRE],
    },

    caracteristicasPago: {
        numeroTarjeta: 123134141,
        banco: 'Santander Rio',
        premium: true,
    },

    lugares: [{ nombre: 'Vita', direccion: 'Palermo', Estrellas: 4, tipo: 'Pub' }],
    regalos: [{ nombre: 'Caja de bombones', precio: 500, tipo: 'Dulces' }],
    matches: [{ idUsuario: 1, nombre: 'Sergio', edad: 40, ciudad: 'Buenos Aires' }],

    mensajes: mensajes,
    usuariosTotales: usuarios,
    app: { idUsuarioChat: null },
};

const usuarios = [
    {
        id: 0,
        nombre: 'Sergio Aguero',
        edad: 40,
        ciudad: 'Buenos Aires',
        gustos: [gustos.SALIR_DE_FIESTA, gustos.VIDEOJUEGOS, gustos.AIRE_LIBRE],
        match: false,
        descripcion:
            'Busco alguien que comparta mi pasión por el running (y que me pueda seguir el paso). Paso mi tiempo libre en los juegos online, mas que nada en el CS.',
    },

    {
        id: 1,
        nombre: 'Lionel Messi',
        edad: 21,
        ciudad: 'Rosario',
        gustos: [gustos.DEPORTES, gustos.VIDEOJUEGOS],
        match: false,
        descripcion:
            'Busco alguien que comparta mi pasión por el running (y que me pueda seguir el paso). Paso mi tiempo libre en los juegos online, mas que nada en el CS.',
    },

    {
        id: 2,
        nombre: 'Roman Riquelme',
        edad: 37,
        ciudad: 'Buenos Aires',
        gustos: [gustos.SALIR_DE_FIESTA, gustos.DEPORTES, gustos.MUSICA],
        match: true,
        descripcion:
            'Busco alguien que comparta mi pasión por el running (y que me pueda seguir el paso). Paso mi tiempo libre en los juegos online, mas que nada en el CS.',
    },
];
