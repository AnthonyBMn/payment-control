import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TercerSemComponent } from './tercer-sem.component';

describe('TercerSemComponent', () => {
  let component: TercerSemComponent;
  let fixture: ComponentFixture<TercerSemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TercerSemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TercerSemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
