import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtravelComponent } from './etravel.component';

describe('EtravelComponent', () => {
  let component: EtravelComponent;
  let fixture: ComponentFixture<EtravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
