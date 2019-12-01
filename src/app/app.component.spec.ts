import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'unitTesting'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('unitTesting');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to unitTesting!');
  });


  // method existence

  it('sayHi shouldexists' , () => {
    const fixture =  TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(AppComponent.prototype.sayHi).toBeTruthy();
  })

  it('sumTwoNumbers should exists', ()=>{
    const fixture =  TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(AppComponent.prototype.sumTwoNumbers).toBeTruthy();
  })

  it('convertToUpperCase should exists', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(AppComponent.prototype.convertToUpperCase).toBeTruthy();
  })


  it('should render the user name', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(AppComponent.prototype.sayHi('nikhil')).toEqual('nikhil');
  })

  it('should sum of two numbers equal to three', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(AppComponent.prototype.sumTwoNumbers(1, 2)).toEqual(3);
  })

  it('should convert the string to the upper case',() => {
    const fixture =  TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(AppComponent.prototype.convertToUpperCase('nikhil')).toEqual('NIKHIL')
  })

});
