import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartoSemComponent } from './cuarto-sem.component';

describe('CuartoSemComponent', () => {
  let component: CuartoSemComponent;
  let fixture: ComponentFixture<CuartoSemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuartoSemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuartoSemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
