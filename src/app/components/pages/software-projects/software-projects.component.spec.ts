import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SoftwareProjectsComponent } from './software-projects.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SoftwareProjectsComponent', () => {
  let component: SoftwareProjectsComponent;
  let fixture: ComponentFixture<SoftwareProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ SoftwareProjectsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('html should contain app-title-header', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-title-header')).not.toBe(null);
  })

  it("component should contain title 'Software Engineering Projects'", () => {
    const work = fixture.debugElement.componentInstance;
    expect(work.title).toEqual('Software Engineering Projects');
  })

});