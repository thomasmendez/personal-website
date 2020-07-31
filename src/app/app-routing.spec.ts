import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppRouting', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RouterModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  }));

  it('should navigate to home', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const router = TestBed.get(Router);
    const navigateSpy = spyOn(router, 'navigate');

    router.navigate(['/'])
    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });

  it('should navigate to work', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const router = TestBed.get(Router);
    const navigateSpy = spyOn(router, 'navigate');

    router.navigate(['/work'])
    expect(navigateSpy).toHaveBeenCalledWith(['/work']);
  });

  it('should navigate to skills & tools', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const router = TestBed.get(Router);
    const navigateSpy = spyOn(router, 'navigate');

    router.navigate(['/skills&tools'])
    expect(navigateSpy).toHaveBeenCalledWith(['/skills&tools']);
  });

});