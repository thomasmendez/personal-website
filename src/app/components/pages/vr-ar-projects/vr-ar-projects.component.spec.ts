import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { VrArProjectsComponent } from './vr-ar-projects.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('VrArProjectsComponent', () => {
  let component: VrArProjectsComponent;
  let fixture: ComponentFixture<VrArProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ], 
      declarations: [ VrArProjectsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrArProjectsComponent);
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

  it("component should contain title 'Virtual Reality (VR) / Augmented Reality (AR) Projects'", () => {
    const projects = fixture.debugElement.componentInstance;
    expect(projects.title).toEqual('Virtual Reality (VR) / Augmented Reality (AR) Projects');
  })

});
