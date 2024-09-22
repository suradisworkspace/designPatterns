class Analytics {
  id: string;
  constructor(id: string) {
    this.id = id;
  }
  getId() {
    return this.id;
  }
  //   just interface
  send() {}
}

export class BaseAnalytics extends Analytics {
  constructor(id: string) {
    super(id);
  }
  send() {
    console.log(`log ${this.id} into local storage`);
  }
}

class AnalyticsDecorator extends Analytics {
  analytics: any;
  constructor(analytics: Analytics) {
    super(analytics.getId());
    this.analytics = analytics;
  }
  send() {
    this.analytics.send();
  }
}

export class GoogleAnalytics extends AnalyticsDecorator {
  constructor(analytics: Analytics) {
    super(analytics);
  }
  send() {
    super.send();
    console.log(`log ${this.id} into google analytics`);
  }
}

export class FacebookAnalytics extends AnalyticsDecorator {
  constructor(analytics: Analytics) {
    super(analytics);
  }
  send() {
    super.send();
    console.log(`log ${this.id} into facebook analytics`);
  }
}
