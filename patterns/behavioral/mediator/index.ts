import { User, ChatRoom } from "./Messenger";

const gun = new User("GUN");
const benz = new User("BENZ");
const juy = new User("JUY");
const vem = new User("VEM");

const Chat = new ChatRoom("Front End-");
Chat.join(gun);
Chat.join(benz);
Chat.join(vem);

gun.send("hello");
benz.send("hi");

Chat.join(juy);
juy.send("greeting");
gun.send("lets review code!");
juy.send("Ok");
benz.send("Ok");
vem.send("Ok");
gun.send("👌");

// gun.renderChat();
// benz.renderChat();
// juy.renderChat();
vem.renderChat();
