export class EventBus {
  listeners: { [index: string]: unknown };

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: (args: unknown) => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    (<Array<CallableFunction>>this.listeners[event]).push(callback);
  }

  off(event: string, callback: (args: unknown) => void) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = (<Record<string, CallableFunction>>this.listeners[event]).filter(
      (listener: () => Record<string, unknown>) => listener !== callback,
    );
  }

  emit(event: string, ...args: any[]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    (<Array<CallableFunction>>this.listeners[event]).forEach((listener: any) => {
      listener(...args);
    });
  }
}
