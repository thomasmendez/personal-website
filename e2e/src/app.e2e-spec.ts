import { HomePage } from './pages/app.home';
import { SkillsAndToolsPage } from './pages/app.skills-tools';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let home: HomePage;
  let skills_tools: SkillsAndToolsPage;

  beforeEach(() => {
    home = new HomePage();
    skills_tools = new SkillsAndToolsPage();
  });

  it('should have a About Me', () => {
    home.navigateTo();
    expect(home.getAboutMeHeader()).toEqual('About Me');
    expect(home.getAboutMeContent()).toBeTruthy(); // must contain a div for .content
  })

  it('should have a Contact', () => {
    home.navigateTo();
    expect(home.getContactHeader()).toEqual('Contact');
    expect(home.getContactContent()).toBeTruthy(); // must contain div for .content
  })

  it('should have Skills', () => {
    skills_tools.navigateTo();
    expect(skills_tools.getSkillsHeader()).toEqual('Skills');
    expect(skills_tools.getSkillsContent()).toBe(3); // li of skills is 3 
  })

  
  it('should have Tools', () => {
    skills_tools.navigateTo();
    expect(skills_tools.getToolsHeader()).toEqual('Tools');
    expect(skills_tools.getToolsContent()).toBe(10); // li of tools is 10
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
