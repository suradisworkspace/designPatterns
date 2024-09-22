class Logger {
  private static _instance: Logger | null = null;
  messages: string[] = [];
  private id: null | string = null;
  constructor(id?: string) {
    if (Logger._instance) {
      if (id) {
        Logger._instance.id = id;
      }
      return Logger._instance;
    }
    if (id) {
      this.id = id;
    }
    Logger._instance = this;
  }

  log(message: string) {
    this.messages.push(message);
  }

  getId() {
    return this.id;
  }

  getMessages() {
    return this.messages;
  }
}

export default Logger;
