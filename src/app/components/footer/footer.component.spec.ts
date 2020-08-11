import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have footer html tag', () => {
    let de = fixture.debugElement;
    expect(de.query(By.css('footer'))).toBeTruthy();
  })

  it('should have copyright with current year', () => {
    let current_year = new Date().getFullYear();
    let text = '© ' + current_year + ' Copyright';
    let de = fixture.debugElement;
    expect(de.query(By.css('.copyright')).nativeElement.innerHTML).toBe(text)
  });

  it('should have an array of icons greater than length of 0', () => { 
    expect(fixture.componentInstance.icons.length).toBeGreaterThan(0);
  });

});
