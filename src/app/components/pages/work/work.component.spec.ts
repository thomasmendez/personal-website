import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkComponent } from './work.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('WorkComponent', () => {
  let component: WorkComponent;
  let fixture: ComponentFixture<WorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkComponent);
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

  it("component should contain title 'Where I Worked'", () => {
    const work = fixture.debugElement.componentInstance;
    expect(work.title).toEqual('Where I Worked');
  })

});
