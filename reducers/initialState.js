import { colors, gustos, userAttributeTypes } from '../config';

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
        colorCard: colors.YELLOW,
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
        colorCard: colors.DARK_PINK,
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
        colorCard: colors.DARK_PINK,
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

// todo -> manjear la opcion de tipo lugar
// párques, etc
const lugares = [
    {
        id: 1,
        stars: 5,
        name: 'Moby Dick',
        neighborhood: 'Palermo',
        city: 'CABA',
        link: 'https://www.baresyboliches.com/wp-content/uploads/moby-2-722x480.jpg',
        address: 'Av Rafael Obligado 2234',
    },
    {
        id: 2,
        stars: 3,
        name: 'Jobs',
        neighborhood: 'Caballito',
        city: 'CABA',
        link: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/c1/92/36/img-20170702-011749-largejpg.jpg',
        address: 'Arenales 1233',
    },
    {
        id: 3,
        stars: 4,
        name: 'Moscow',
        city: 'CABA',
        neighborhood: 'Almagro',
        link: 'https://images.clarin.com/2019/11/28/pacha-para-amanecer-junto-al___e-SW0JTL_1256x620__1.jpg',
        address: 'Av Costanera 122',
    },
    {
        id: 4,
        stars: 4,
        name: 'Rose in Rio',
        neighborhood: 'Palermo',
        city: 'CABA',
        link: 'https://px.cdn.bigbangnews.com/bigbang/122019/1575321848605/rose.webp?cw=555&ch=499&extw=jpg',
        address: 'Av Cordoba 700',
    },
    {
        id: 5,
        stars: 2,
        name: '7030',
        city: 'CABA',
        neighborhood: 'Pilar',
        link: 'https://px.cdn.bigbangnews.com/bigbang/122019/1575321848605/rose.webp?cw=555&ch=499&extw=jpg',
        address: 'Las Magnolias 765',
    },
    {
        id: 6,
        stars: 5,
        name: 'Blest',
        neighborhood: 'Nordelta',
        city: 'CABA',
        link: 'https://res.cloudinary.com/tf-lab/image/upload/restaurant/979dc9fc-3554-42de-8e9f-a4480d31a534/fa2d2036-bd0f-4b46-8457-0adb588ee4a4.jpg',
        address: 'Ex ruta 8 km 33',
    },
];

const regalos = [
    {
        id: 1,
        name: 'Caja de Chocolates',
        precio: 500,
        tipo: giftType.CANDY,
        link: 'https://i.pinimg.com/736x/ff/83/06/ff83064edeb9e91462a471118544f27b.jpg',
    },
    {
        id: 2,
        name: 'Ramo de Flores',
        precio: 900,
        tipo: giftType.FLOWER,
        link: 'https://i.pinimg.com/736x/ff/83/06/ff83064edeb9e91462a471118544f27b.jpg',
    },
    {
        id: 3,
        name: '1/4 kg Helado',
        precio: 420,
        tipo: giftType.DRINKS,
        link: 'https://media.minutouno.com/p/54ca0f734914a85fc9ea137fde2617e9/adjuntos/150/imagenes/023/804/0023804134/1200x675/smart/helado-cuartojpg.jpg',
    },
    {
        id: 4,
        name: '1/4 kg Helado',
        precio: 420,
        tipo: giftType.DRINKS,
        link: 'https://media.minutouno.com/p/54ca0f734914a85fc9ea137fde2617e9/adjuntos/150/imagenes/023/804/0023804134/1200x675/smart/helado-cuartojpg.jpg',
    },
    {
        id: 5,
        name: '1/4 kg Helado',
        precio: 420,
        tipo: giftType.FLOWER,
        link: 'https://media.minutouno.com/p/54ca0f734914a85fc9ea137fde2617e9/adjuntos/150/imagenes/023/804/0023804134/1200x675/smart/helado-cuartojpg.jpg',
    },
    {
        id: 6,
        name: '1/4 kg Helado',
        precio: 420,
        tipo: giftType.CANDY,
        link: 'https://media.minutouno.com/p/54ca0f734914a85fc9ea137fde2617e9/adjuntos/150/imagenes/023/804/0023804134/1200x675/smart/helado-cuartojpg.jpg',
    },
];

export const initialState = {
    usuario: {
        id: 9000,
        edad: 22,
        email: 'barbara@gmail.com',
        password: 'meetme2021',
        autorizado: true,
        descripcion: 'Saa',
        nombre: 'Barbara',
        colorCard: colors.PINK,
        ciudad: 'Buenos Aires',
        gustos: [gustos.VIDEOJUEGOS, gustos.AIRE_LIBRE],
        atributos: {
            [userAttributeTypes.HAIR]: 'short',
            [userAttributeTypes.SKIN_TONE]: 'brown',
            [userAttributeTypes.FACIAL_HAIR]: 'mediumBeard',
            [userAttributeTypes.TSHIRT_GRAPHIC]: 'vue',
            [userAttributeTypes.ACCESSORY]: 'shades',
            [userAttributeTypes.BODY]: 'chest',
            [userAttributeTypes.CLOTHING]: 'tankTop',
            [userAttributeTypes.CLOTHING_COLOR]: 'white',
            [userAttributeTypes.EYES]: 'wink',
            [userAttributeTypes.HAIR_COLOR]: 'blonde',
            [userAttributeTypes.LIP_COLOR]: 'pink',
            [userAttributeTypes.HAT_COLOR]: 'green',
            [userAttributeTypes.HAT]: 'none',
            [userAttributeTypes.MOUTH]: 'open',
            [userAttributeTypes.EYEBROWS]: 'angry',
        },
    },

    caracteristicasPago: {
        numeroTarjeta: 123134141,
        banco: 'Santander Rio',
        premium: true,
    },

    lugares: lugares,
    regalos: regalos,

    mensajes: mensajes,
    misActividades: misActividades,
    listaDeActividades: listaDeActividades,
    usuariosTotales: usuarios,
    app: { idUsuarioChat: null },
    error: '',
};
