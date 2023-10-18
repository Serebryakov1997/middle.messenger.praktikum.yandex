import { Message } from '../views/components';
import { IMockChatsJSON } from '../views/pages/chats/mockChats';
import { Block } from './block';

// export function creationMsgsBlocksJSON(
//     mockChatsJSON: IMockChatsJSON,
//     // children: Record<string, Block>
// ): { [key: string]: Block[] } {

//     let msgsBlocksJSON: { [key: string]: Block[] } = {};

//     Object.keys(mockChatsJSON).forEach(key => {

//         const msgsOfUser = mockChatsJSON[Number(key)].msgs!;

//         if (msgsOfUser) {
//             const msgsArrForUser: Block[] = [];
//             Object.values(msgsOfUser).forEach(msgKey => {
//                 const msg = new Message({
//                     styles: {
//                         messageClass: 'msg-in-chat'
//                     },
//                     message: msgKey
//                 });
//                 msgsArrForUser.push(msg);
//             });

//             msgsBlocksJSON[Number(key)] = msgsArrForUser;
//         }
//     });

//     return msgsBlocksJSON;
// }

// export function creationMsgsBlocksArr(

// )
