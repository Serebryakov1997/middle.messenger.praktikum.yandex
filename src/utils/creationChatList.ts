import { Chat } from '../views/components';
import { ChatProps } from '../views/components/chat/chat';
import { IMockChatsJSON } from '../views/pages/chats/mockChats';
import { Block } from './block';

export function creationChatList(
  mockJSONData: IMockChatsJSON,
): Block[] {
  const chatsList: Block[] = [];

  const styles: ChatProps['styles'] = {
    chatClass: 'chat',
    mockImgClass: 'mock-img',
    chatNameClass: 'name',
    lastPartMsgClass: 'last-part-msg',
    timeOfLastMsgClass: 'time-of-last-msg',
  };

  Object.keys(mockJSONData).forEach((key) => {
    const hasNumberOfUnreadMsgs = Object.hasOwn(
      mockJSONData[Number(key)],
      'numberOfUnreadMsgs'
    );

    if (hasNumberOfUnreadMsgs) {
      styles.numberOfUnreadMsgsClass = 'number-of-unread-msgs';
    } else {
      styles.numberOfUnreadMsgsClass = '';
    }

    const { chatName } = mockJSONData[Number(key)];
    const { lastPartMsg } = mockJSONData[Number(key)];
    const { numberOfUnreadMsgs } = mockJSONData[Number(key)];
    const { timeOfLastMsg } = mockJSONData[Number(key)];

    let selectedChatLastTime = '';

    const hasSelectedChatLastTime = Object.hasOwn(
      mockJSONData[Number(key)],
      'selectedChatLastTime'
    );
    if (hasSelectedChatLastTime) {
      selectedChatLastTime = mockJSONData[Number(key)].selectedChatLastTime!;
    }

    const chat = new Chat({
      styles,
      chatName,
      lastPartMsg,
      numberOfUnreadMsgs,
      timeOfLastMsg,
      chatAreaId: chatName,
      events: {
        click: () => {
          const selectChatLegentEl = document.getElementById('select-chat-legend-id');
          if (selectChatLegentEl) {
            selectChatLegentEl.style.display = 'none';
          }

          const chatArea = document.getElementById('chat-area-id');
          chatArea!.style.display = 'block';

          const chatAreaName = document.getElementById('chat-area-name-id');
          chatAreaName!.textContent = chatName;

          const chatAreaLastTime = document.getElementById('chat-area-time-id');
          const selectedChatLastTime = mockJSONData[Number(key)].selectedChatLastTime;
          chatAreaLastTime!.textContent = selectedChatLastTime as string;
        },
      },
    });
    chatsList.push(chat);
  });
  return chatsList;
}
