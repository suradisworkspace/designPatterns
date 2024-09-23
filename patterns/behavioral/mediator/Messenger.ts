const chatWidth = 50;
export class User {
  declare chatRoom: ChatRoom;
  chatLog: [string, string][] = [];
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  private makeChat(text: string, name?: string) {
    const convertedName = name
      ? `${name}:`.padEnd(chatWidth, " ")
      : "Me:".padStart(chatWidth, " ");
    const convertedMessage = name
      ? ` ${text}`.padEnd(chatWidth, " ")
      : `${text} `.padStart(chatWidth, " ");
    this.chatLog.push([convertedName, convertedMessage]);
  }
  renderChat() {
    let convertedTitle =
      this.chatRoom.name + " ".repeat(this.chatRoom.name.length % 2);
    const padTitle = " ".repeat((chatWidth - convertedTitle.length) / 2);
    convertedTitle = padTitle + convertedTitle + padTitle;
    console.log("_".repeat(chatWidth + 2));
    console.log(`|${convertedTitle}|`);
    console.log("_".repeat(chatWidth + 2));
    this.chatLog.forEach((log) => {
      console.log(`|${log[0]}|`);
      console.log(`|${log[1]}|`);
    });
    console.log("_".repeat(chatWidth + 2));
  }

  /**
   * This method gonna send message to mediator to handle
   * @param message - string that send to mediator (ChatRoom)
   */
  send(message: string) {
    this.makeChat(message);
    this.chatRoom?.send(this.name, message, this);
  }

  /**
   * This method will receive message from mediator
   * @param sender - name of sender
   * @param message - message of sender
   */
  receive(sender: string, message: string) {
    this.makeChat(message, sender);
  }
}

/**
 * Act as Mediator
 */
export class ChatRoom {
  member: User[];
  name: string;
  constructor(name: string) {
    this.name = name;
    this.member = [];
  }
  join(user: User) {
    user.chatRoom = this;
    this.member.push(user);
  }
  send(name: string, message: string, from: User) {
    this.member.forEach((user) => {
      if (user !== from) {
        user.receive(name, message);
      }
    });
  }
}
