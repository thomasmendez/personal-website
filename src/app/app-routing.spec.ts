import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppRouting', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
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