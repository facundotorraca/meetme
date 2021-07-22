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
    AIRE_LIBRE: 'Aire libre',
    VIDEOJUEGOS: 'Videojuegos',
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
    usuariosTotales: [
        { idUsuario: 1, nombre: 'Sergio', edad: 40, ciudad: 'Buenos Aires', match: true },
    ],
    mensajes: mensajes,
    app: { idUsuarioChat: null },
};
