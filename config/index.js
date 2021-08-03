import { Dimensions } from 'react-native';

export const colors = {
    PASS: 'red',
    LIKE: '#64EDCC',
    PINK: '#E850E0',
    BLUE: '#8225E2',
    PURPLE: '#9C27B0',
    YELLOW: '#FBB831',
    ORANGE: '#FB8569',
    DARK_PINK: '#FB569C',
};

export const menus = {
    MEETME: 1,
    INBOX: 2,
    PUBS: 3,
    REGALO: 4,
};

export const strongerColor = {
    [colors.PINK]: '#A5049E',
    [colors.YELLOW]: '#E59B01',
    [colors.ORANGE]: '#E55836',
    [colors.PURPLE]: '#67027A',
    [colors.DARK_PINK]: '#F31070',
    [colors.BLUE]: '#5704AB',
};

export const screenSize = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    ratio: Dimensions.get('window').height / Dimensions.get('window').width,
};
