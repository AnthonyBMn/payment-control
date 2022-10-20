import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerSemComponent } from './primer-sem.component';

describe('PrimerSemComponent', () => {
  let component: PrimerSemComponent;
  let fixture: ComponentFixture<PrimerSemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerSemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimerSemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
