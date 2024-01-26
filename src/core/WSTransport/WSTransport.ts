import { EventBus } from '../EventBus';

export enum WSTransportEvents {
    Connected = 'connected',
    Error = 'error',
    Message = 'message',
    Close = 'close'
}

export default class WSTransport extends EventBus {
  _socket: WebSocket | null = null;

  pingInterval: number = 0;

  url: string;

  constructor(url: string) {
    super();
    this.url = url;
  }

  send(data: unknown) {
    if (!this._socket) {
      throw new Error('Socket is not connected');
    }

    this._socket.send(JSON.stringify(data));
  }

  connect(): Promise<void> {
    this._socket = new WebSocket(this.url);

    this.subscribe(this._socket);

    this.setupPing();

    return new Promise((resolve) => {
      this.on(WSTransportEvents.Connected, () => {
        resolve();
      });
    });
  }

  close() {
    this._socket?.close();
  }

  setupPing() {
    // @ts-ignore
    this.pingInterval = setInterval(() => {
      this.send({ type: 'ping' });
    }, 5000);

    this.on(WSTransportEvents.Close, () => {
      clearInterval(this.pingInterval);
      this.pingInterval = 0;
    });
  }

  subscribe(socket: WebSocket) {
    socket.addEventListener('open', () => {
      this.emit(WSTransportEvents.Connected);
    });
    socket.addEventListener('close', () => {
      this.emit(WSTransportEvents.Close);
    });

    socket.addEventListener('error', (e) => {
      this.emit(WSTransportEvents.Error, e);
    });

    socket.addEventListener('message', (message) => {
      const data = JSON.parse(message.data);

      if (data.type && data.type === 'pong') {
        return;
      }

      this.emit(WSTransportEvents.Message, data);
    });
  }
}
