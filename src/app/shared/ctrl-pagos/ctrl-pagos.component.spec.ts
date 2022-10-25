import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtrlPagosComponent } from './ctrl-pagos.component';

describe('CtrlPagosComponent', () => {
  let component: CtrlPagosComponent;
  let fixture: ComponentFixture<CtrlPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtrlPagosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtrlPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
