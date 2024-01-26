import { store } from '../core';
import WSTransport, { WSTransportEvents } from '../core/WSTransport/WSTransport';
import { IMessage } from '../models/interfaces/messages';

class MessagesController {
  sockets: Map<number, WSTransport> = new Map();

  async connect(id: number, token: string) {
    if (this.sockets.has(id)) {
      return;
    }

    const userId = store.getState().user!.id;

    const wsTransport = new WSTransport(`wss://ya-praktikum.tech/ws/chats/${userId}/${id}/${token}`);

    this.sockets.set(id, wsTransport);

    await wsTransport.connect();

    this.subscribe(wsTransport, id);
    this.getOldMsgs(id);
  }

  sendMsg(id: number, message: string) {
    const socket = this.sockets.get(id);

    if (!socket) {
      throw new Error(`Chat ${id} is not connected`);
    }

    socket.send({
      type: 'message',
      content: message,
    });
  }

  getOldMsgs(id: number) {
    const socket = this.sockets.get(id);

    if (!socket) {
      throw new Error(`Chat ${id} is not connected`);
    }

    socket.send({ type: 'get old', content: '0' });
  }

  closeAll() {
    Array.from(this.sockets.values()).forEach((socket) => socket.close());
  }

  onMsg(id: number, msgs: IMessage | IMessage[]) {
    let msgsToAdd: IMessage[] = [];

    if (Array.isArray(msgs)) {
      msgsToAdd = msgs.reverse();
    } else {
      msgsToAdd.push(msgs);
    }

    const curMsgs = (store.getState().messages || {})[id] || [];

    msgsToAdd = [...curMsgs, ...msgsToAdd];

    store.set(`messages.${id}`, msgsToAdd);
  }

  onClose(id: number) {
    this.sockets.delete(id);
  }

  subscribe(transport: WSTransport, id: number) {
    transport.on(WSTransportEvents.Message, (msg) => this.onMsg(id, <IMessage | IMessage[]>msg));
    transport.on(WSTransportEvents.Close, () => this.onClose(id));
  }
}

const msgsController = new MessagesController();
export default msgsController;
