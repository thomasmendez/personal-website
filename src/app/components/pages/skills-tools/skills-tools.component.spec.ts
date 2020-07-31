import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsToolsComponent } from './skills-tools.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SkillsToolsComponent', () => {
  let component: SkillsToolsComponent;
  let fixture: ComponentFixture<SkillsToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsToolsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
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

  it('should contain title header', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-title-header')).not.toBe(null);
  })
});
