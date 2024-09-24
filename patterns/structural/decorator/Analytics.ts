class Analytics {
  private _id: string = "";

  constructor() {
    if (this.constructor === Analytics) {
      throw new Error("Analytics is abstract class. cant be instantiate!");
    }
  }

  getId() {
    return this._id;
  }

  setId(id: string) {
    this._id = id;
  }

  /** @abstract */
  send() {
    throw new Error(
      `Method 'send()' must be implemented in '${this.constructor.name}'`
    );
  }
}

export class BaseAnalytics extends Analytics {
  constructor() {
    super();
  }
  send() {
    console.log(`log ${this.getId()} into local storage`);
  }
}

class AnalyticsDecorator extends Analytics {
  private _baseAnalytics: Analytics;
  constructor(analytics: Analytics) {
    super();
    this._baseAnalytics = analytics;
  }

  getId() {
    return this._baseAnalytics.getId();
  }

  send() {
    this._baseAnalytics.send();
  }
}

export class GoogleAnalytics extends AnalyticsDecorator {
  constructor(analytics: Analytics) {
    super(analytics);
  }
  send() {
    super.send();
    console.log(`log ${this.getId()} into google analytics`);
  }
}

export class FacebookAnalytics extends AnalyticsDecorator {
  constructor(analytics: Analytics) {
    super(analytics);
  }
  send() {
    super.send();
    console.log(`log ${this.getId()} into facebook analytics`);
  }
}
