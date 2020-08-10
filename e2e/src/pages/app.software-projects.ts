import { browser, by, element, Locator, WebElement, ElementFinder, ElementArrayFinder } from 'protractor';

export class SoftwareProjects {

  navigateTo(): Promise<unknown> {
    return browser.get('/projects/software') as Promise<unknown>;
  }

  // Software Engineering Projects
  getProjectHeader(): Promise<string> {
    return element(by.css('app-software-projects')).all(by.css('.header')).first().getText() as Promise<string>;
  }

  getSkillsContent(): Promise<number> {
    return element(by.css('app-software-projects')).all(by.css('.mytasks li')).count() as Promise<number>;
  }
}