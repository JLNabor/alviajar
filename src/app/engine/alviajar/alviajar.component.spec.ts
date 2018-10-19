import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlviajarComponent } from './alviajar.component';

describe('AlviajarComponent', () => {
  let component: AlviajarComponent;
  let fixture: ComponentFixture<AlviajarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlviajarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlviajarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
