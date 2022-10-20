import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimoSemComponent } from './decimo-sem.component';

describe('DecimoSemComponent', () => {
  let component: DecimoSemComponent;
  let fixture: ComponentFixture<DecimoSemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecimoSemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecimoSemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
