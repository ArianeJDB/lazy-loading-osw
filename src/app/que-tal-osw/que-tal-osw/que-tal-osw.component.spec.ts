import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueTalOswComponent } from './que-tal-osw.component';

describe('QueTalOswComponent', () => {
  let component: QueTalOswComponent;
  let fixture: ComponentFixture<QueTalOswComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueTalOswComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueTalOswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
