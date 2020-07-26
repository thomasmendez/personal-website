import { browser, by, element, Locator, WebElement, ElementFinder, ElementArrayFinder } from 'protractor';

export class SkillsAndToolsPage {

  navigateTo(): Promise<unknown> {
    return browser.get('/skills&tools') as Promise<unknown>;
  }

  // Skills
  getSkillsHeader(): Promise<string> {
    return element(by.css('app-skills-tools')).all(by.css('.header')).first().getText() as Promise<string>;
  }

  getSkillsContent(): Promise<number> {
    return element(by.css('app-skills-tools')).all(by.css('#content-skills li')).count() as Promise<number>;
  }

  // Tools
  getToolsHeader(): Promise<string> {
    return element(by.css('app-skills-tools')).all(by.css('.header')).last().getText() as Promise<string>;
  }

  getToolsContent(): Promise<number> {
    return element(by.css('app-skills-tools')).all(by.css('#content-tools li')).count() as Promise<number>;
  }
}