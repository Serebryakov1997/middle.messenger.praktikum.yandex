import { Chat } from '../views/components';
import { ChatProps } from '../views/components/chat/chat';
import { IMockChatsJSON } from '../views/pages/chats/mockChats';
import { Block } from './block';

export function creationChatList(
  mockJSONData: IMockChatsJSON,
  children: Record<string, Block | Block[]>,
): Block[] {
  const chatsList: Block[] = [];
  // let needKey: number = -1;

  const styles: ChatProps['styles'] = {
    chatClass: 'chat',
    mockImgClass: 'mock-img',
    chatNameClass: 'name',
    lastPartMsgClass: 'last-part-msg',
    timeOfLastMsgClass: 'time-of-last-msg',
  };

  Object.keys(mockJSONData).forEach((key) => {
    const hasNumberOfUnreadMsgs = Object.hasOwn(mockJSONData[Number(key)], 'numberOfUnreadMsgs');

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

    const hasSelectedChatLastTime = Object.hasOwn(mockJSONData[Number(key)], 'selectedChatLastTime');
    if (hasSelectedChatLastTime) {
      selectedChatLastTime = mockJSONData[Number(key)].selectedChatLastTime!;
    }

    const chat = new Chat({
      styles,
      chatName,
      lastPartMsg,
      numberOfUnreadMsgs,
      timeOfLastMsg,
      events: {
        click: () => {
          const selectChatLegentEl = document.getElementById('select-chat-legend-id');
          if (selectChatLegentEl) {
            selectChatLegentEl.style.display = 'none';
          }
          (children.selectedChatArea as Block).setProps({
            selectedChatName: chatName,
            selectedChatLastTime,
            chatKey: Number(key),
          });
          (children.selectedChatArea as Block).show();
        },
      },
    });
    chatsList.push(chat);
  });
  return chatsList;
}
