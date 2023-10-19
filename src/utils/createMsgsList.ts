import { Message } from '../views/components';
import { mockChatsJSON } from '../views/pages/chats/mockChats';
import { Block } from './block';

export function creationMsgsBlocksArr(key: number): Block[] {
  const msgsArrForUser: Block[] = [];

  if (key) {
    const msgsOfUser = mockChatsJSON[key].msgs!;
    if (msgsOfUser) {
      Object.values(msgsOfUser).forEach((msgKey) => {
        const msg = new Message({
          styles: {
            messageClass: 'msg-in-chat',
          },
          message: msgKey,
        });
        msgsArrForUser.push(msg);
      });
    }
  }

  console.log('msgsArrForUser: ', msgsArrForUser);

  return msgsArrForUser;
}
