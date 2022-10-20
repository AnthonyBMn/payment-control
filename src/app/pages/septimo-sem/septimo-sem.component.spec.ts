import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptimoSemComponent } from './septimo-sem.component';

describe('SeptimoSemComponent', () => {
  let component: SeptimoSemComponent;
  let fixture: ComponentFixture<SeptimoSemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeptimoSemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeptimoSemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
