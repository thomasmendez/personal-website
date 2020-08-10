import { browser, by, element, Locator, WebElement, ElementFinder, ElementArrayFinder } from 'protractor';

export class VrArProjects {

  navigateTo(): Promise<unknown> {
    return browser.get('/projects/vr-ar') as Promise<unknown>;
  }

  // VR / AR Projects
  getProjectHeader(): Promise<string> {
    return element(by.css('app-vr-ar-projects')).all(by.css('.header')).first().getText() as Promise<string>;
  }

  getSkillsContent(): Promise<number> {
    return element(by.css('app-vr-ar-projects')).all(by.css('.mytasks li')).count() as Promise<number>;
  }
}