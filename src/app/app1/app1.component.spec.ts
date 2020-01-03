import { TestBed, async } from '@angular/core/testing';
import { App1Component } from './app1.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        App1Component
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App1Component);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-test'`, () => {
    const fixture = TestBed.createComponent(App1Component);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-test');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(App1Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-test!');
  });
});
