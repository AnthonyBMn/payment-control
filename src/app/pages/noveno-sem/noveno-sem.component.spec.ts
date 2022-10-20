import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovenoSemComponent } from './noveno-sem.component';

describe('NovenoSemComponent', () => {
  let component: NovenoSemComponent;
  let fixture: ComponentFixture<NovenoSemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovenoSemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovenoSemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
