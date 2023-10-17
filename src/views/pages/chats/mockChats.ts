export interface IMockChatsJSON {
    [key: number]: {
        chatName: string;
        lastPartMsg: string;
        numberOfUnreadMsgs: number;
        timeOfLastMsg: string;
    }
}

export const mockChatsJSON: IMockChatsJSON = {
    0: {
        chatName: 'Андрей',
        lastPartMsg: 'Изображение',
        numberOfUnreadMsgs: 2,
        timeOfLastMsg: '10:49'
    },
    1: {
        chatName: 'Киноклуб',
        lastPartMsg: 'Вы: стикер',
        numberOfUnreadMsgs: 0,
        timeOfLastMsg: '12:00'
    },
    2: {
        chatName: 'Илья',
        lastPartMsg: 'Друзья...',
        numberOfUnreadMsgs: 4,
        timeOfLastMsg: '15:12'
    },
    3: {
        chatName: 'Иван',
        lastPartMsg: ')',
        numberOfUnreadMsgs: 0,
        timeOfLastMsg: 'Пт'
    },
    4: {
        chatName: 'ДР',
        lastPartMsg: '16 мая собираемся...',
        numberOfUnreadMsgs: 0,
        timeOfLastMsg: 'Ср'
    },
    5: {
        chatName: 'Рома',
        lastPartMsg: '(',
        numberOfUnreadMsgs: 0,
        timeOfLastMsg: 'Пт'
    },
    6: {
        chatName: 'Надежда',
        lastPartMsg: 'Привет',
        numberOfUnreadMsgs: 0,
        timeOfLastMsg: 'Пн'
    },
    7: {
        chatName: 'Чат',
        lastPartMsg: 'Дорогие друзья!!! ...',
        numberOfUnreadMsgs: 0,
        timeOfLastMsg: 'Вт'
    },
    8: {
        chatName: 'Практикум',
        lastPartMsg: ')',
        numberOfUnreadMsgs: 0,
        timeOfLastMsg: 'Пт'
    }
};
