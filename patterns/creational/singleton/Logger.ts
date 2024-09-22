class Logger {
  private static _instance: Logger | null = null;
  messages: string[] = [];
  private _id: null | string = null;
  constructor() {
    if (Logger._instance) {
      return Logger._instance;
    }
    Logger._instance = this;
  }

  log(message: string) {
    this.messages.push(message);
  }

  getId() {
    return this._id;
  }

  setId(id: string) {
    this._id = id;
  }

  getMessages() {
    return this.messages;
  }
}

export default Logger;
