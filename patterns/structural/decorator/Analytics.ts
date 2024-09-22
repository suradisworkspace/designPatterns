/**
 * @abstract
 * @class Analytics
 * @constructor
 */
class Analytics {
  private _id: string;
  /**
   * Analytics constructor
   * @param {string} id - User id
   */
  constructor(id: string) {
    if (this.constructor === Analytics) {
      throw new Error("Analytics is abstract class. cant be instantiate!");
    }
    this._id = id;
  }
  getId() {
    return this._id;
  }

  /** @abstract */
  send() {
    throw new Error(
      `Method 'send()' must be implemented in '${this.constructor.name}'`
    );
  }
}

/**
 * @class BaseAnalytics
 * @extends {Analytics}
 */
export class BaseAnalytics extends Analytics {
  /**
   * Analytics constructor
   * @param {string} id - User id
   */
  constructor(id: string) {
    super(id);
  }
  send() {
    console.log(`log ${this.getId()} into local storage`);
  }
}

/**
 * @class AnalyticsDecorator
 * @constructor
 * @extends {Analytics}
 */
class AnalyticsDecorator extends Analytics {
  analytics: Analytics;
  /**
   *
   * @param {Analytics} analytics - any analytics class
   */
  constructor(analytics: Analytics) {
    super(analytics.getId());
    this.analytics = analytics;
  }
  send() {
    this.analytics.send();
  }
}

/**
 * @class GoogleAnalytics
 * @constructor
 * @extends {AnalyticsDecorator}
 */
export class GoogleAnalytics extends AnalyticsDecorator {
  constructor(analytics: Analytics) {
    super(analytics);
  }
  send() {
    super.send();
    console.log(`log ${this.getId()} into google analytics`);
  }
}

/**
 * @class FacebookAnalytics
 * @constructor
 * @extends {AnalyticsDecorator}
 */
export class FacebookAnalytics extends AnalyticsDecorator {
  constructor(analytics: Analytics) {
    super(analytics);
  }
  send() {
    super.send();
    console.log(`log ${this.getId()} into facebook analytics`);
  }
}
