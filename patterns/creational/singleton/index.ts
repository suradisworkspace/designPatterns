import Logger from "./Logger";

const Logger1 = new Logger("guest");
console.log('init logger1 with: new Logger("guest")');
console.log("logger1: id -> ", Logger1.getId());
Logger1.log("log from logger1");
console.log("logger1: log -> log from logger1");
console.log("logger1: message list ->", Logger1.getMessages());
const Logger2 = new Logger("member");
console.log('init logger2 with: new Logger("member")');
console.log("logger1: id -> ", Logger1.getId());
console.log("logger2: id -> ", Logger2.getId());
Logger2.log("log from logger2");
console.log("logger2: log -> log from logger2");
console.log("logger1: message list ->", Logger1.getMessages());
console.log("logger2: message list ->", Logger2.getMessages());
