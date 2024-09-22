import Middleware, { logger, addHello, areUWorld } from "./Middleware";
const mw = new Middleware();
mw.use(logger).use(addHello).use(areUWorld);
mw.run("world");
