import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEtravelComponent } from './item-etravel.component';

describe('ItemEtravelComponent', () => {
  let component: ItemEtravelComponent;
  let fixture: ComponentFixture<ItemEtravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemEtravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEtravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
