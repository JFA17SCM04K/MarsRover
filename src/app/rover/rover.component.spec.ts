import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RoverComponent } from './rover.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


describe('Mars Test', () => {
  let component: RoverComponent;
  let fixture: ComponentFixture<TrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, BrowserAnimationsModule, BrowserModule],
      declarations: [ RoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //start form
  it('Rover should have a start point always and the form should not be invalid at any point', () => {
    expect(component.startForm.valid).toBeTruthy();
  });


  it('if the x-coordinate and y-coordinate cannot be greater than 5', () =>{
    expect(component.startForm.value.xValue).not.toBeGreaterThan(5);
    expect(component.startForm.value.yValue).not.toBeGreaterThan(5);
  });

  it('if the x-coordinate and y-coordinate cannot be less than 0', () =>{
    expect(component.startForm.value.xValue).toBeGreaterThan(0);
    expect(component.startForm.value.yValue).toBeGreaterThan(0);
  });

  it('command form is invalid when empty because atleast one command is needed for moving the Rover', () =>{
    expect(component.commandForm.valid).toBeFalsy();
  });

  it('command form should return a string', () =>{
    expect(component.commandForm.value.commands).toBeNull();
  })

  it('if the start point is not mentioned then the start point for Rover should be by default (0,0,N)', () =>{

  });

  //
});
