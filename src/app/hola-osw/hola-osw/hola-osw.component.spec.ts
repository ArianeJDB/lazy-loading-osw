import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaOswComponent } from './hola-osw.component';

describe('HolaOswComponent', () => {
  let component: HolaOswComponent;
  let fixture: ComponentFixture<HolaOswComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolaOswComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolaOswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
