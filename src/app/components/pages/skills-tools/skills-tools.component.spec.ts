import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsToolsComponent } from './skills-tools.component';

describe('SkillsToolsComponent', () => {
  let component: SkillsToolsComponent;
  let fixture: ComponentFixture<SkillsToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
