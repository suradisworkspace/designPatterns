type MiddlewareFnType = (
  text: string,
  next: (modifedText: string) => void
) => void;

class Middleware {
  _middlewares: Function[];
  constructor() {
    this._middlewares = [];
  }
  use(fn: Function) {
    this._middlewares.push(fn);
    return this;
  }

  /**
   *
   * @param text string that pass through middleware
   * @param onComplete callback when all middleware done
   */
  executeMiddleware(text: string, onComplete: MiddlewareFnType) {
    // this._middlewares.reduceRight(
    //   (done, next) => (modifiedText: string) => next(modifiedText, done),
    //   onComplete
    // )(text);
    const combinedMiddleware = this._middlewares.reduceRight(
      (onDone, middleware) => (modifiedText: string) =>
        middleware(modifiedText, onDone),
      onComplete
    );
    combinedMiddleware(text);
  }

  run(text: string) {
    this.executeMiddleware(text, (done: string) =>
      console.log("completed all middleware with value: ", done)
    );
  }
}

export const logger: MiddlewareFnType = (text, next) => {
  console.log("log: ", text);
  next(text);
};
export const addHello: MiddlewareFnType = (text, next) => {
  text = "hello " + text;
  console.log("added hello");
  next(text);
};
export const areUWorld: MiddlewareFnType = (text, next) => {
  if (/world/.test(text)) {
    next(text);
  } else {
    console.log("You are not world, cannot pass through");
  }
};

export default Middleware;
