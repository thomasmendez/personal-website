import { browser, by, element, Locator, WebElement, ElementFinder, ElementArrayFinder } from 'protractor';

export class HomePage {

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  // About Me
  getAboutMeHeader(): Promise<string> {
    return element(by.css('app-about-me')).$('.header').getText() as Promise<string>;
  }

  getAboutMeContent(): Promise<boolean> {
    return element(by.css('app-about-me')).$('.content').isPresent() as Promise<boolean>;
  }

  // Contact
  getContactHeader(): Promise<string> {
    return element(by.css('app-contact')).$('.header').getText() as Promise<string>;
  }

  getContactContent(): Promise<boolean> {
    return element(by.css('app-contact')).$('.content').isPresent() as Promise<boolean>;
  }
}
