import { BaseAnalytics, GoogleAnalytics, FacebookAnalytics } from "./Analytics";

let myAnalytics = new BaseAnalytics("gun");
// myAnalytics.send();
myAnalytics = new GoogleAnalytics(myAnalytics);
// myAnalytics.send();
myAnalytics = new FacebookAnalytics(myAnalytics);
myAnalytics.send();
