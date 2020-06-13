import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaoOswComponent } from './chao-osw.component';

describe('ChaoOswComponent', () => {
  let component: ChaoOswComponent;
  let fixture: ComponentFixture<ChaoOswComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaoOswComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaoOswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
