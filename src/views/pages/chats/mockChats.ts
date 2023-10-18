export interface IMockChatsJSON {
    [key: number]: {
        chatName: string;
        lastPartMsg: string;
        numberOfUnreadMsgs?: string;
        timeOfLastMsg: string;
        selectedChatLastTime?: string;
        msgs?: string[]
    }
}

export const mockChatsJSON: IMockChatsJSON = {
    0: {
        chatName: 'Андрей',
        lastPartMsg: 'Изображение',
        numberOfUnreadMsgs: '2',
        timeOfLastMsg: '10:49',
        selectedChatLastTime: 'Был давно',
        msgs: ['Привет', 'Изображение']
    },
    1: {
        chatName: 'Киноклуб',
        lastPartMsg: 'Вы: стикер',
        timeOfLastMsg: '12:00',
        selectedChatLastTime: 'Был вчера в 11:00',
        msgs: ['Кино завтра в 12:00', 'Вы: Ок']
    },
    2: {
        chatName: 'Илья',
        lastPartMsg: 'Друзья...',
        numberOfUnreadMsgs: '4',
        timeOfLastMsg: '15:12',
        selectedChatLastTime: 'Был сегодня в 15:15',
        msgs: ['До завтра', 'Друзья ...']
    },
    3: {
        chatName: 'Иван',
        lastPartMsg: ')',
        timeOfLastMsg: 'Пт',
        selectedChatLastTime: 'Был вчера в 16:54',
        msgs: [')']
    },
    4: {
        chatName: 'ДР',
        lastPartMsg: '16 мая собираемся...',
        timeOfLastMsg: 'Ср',
        msgs: ['Всем привет!', '16 мая собираемся у метро']
    },
    5: {
        chatName: 'Рома',
        lastPartMsg: '(',
        timeOfLastMsg: 'Пт',
        selectedChatLastTime: 'Был вчера в 17:54',
        msgs: ['(']
    },
    6: {
        chatName: 'Надежда',
        lastPartMsg: 'Привет',
        timeOfLastMsg: 'Пн',
        selectedChatLastTime: 'Была сегодня в 13:00',
        msgs: ['Привет']
    },
    7: {
        chatName: 'Чат',
        lastPartMsg: 'Дорогие друзья!!! ...',
        timeOfLastMsg: 'Вт',
        msgs: ['Дорогие друзья!!! ...']
    },
    8: {
        chatName: 'Практикум',
        lastPartMsg: ')',
        timeOfLastMsg: 'Пт',
        msgs: [')']
    }
};
