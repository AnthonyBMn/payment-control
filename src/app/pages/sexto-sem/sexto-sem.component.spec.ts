import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SextoSemComponent } from './sexto-sem.component';

describe('SextoSemComponent', () => {
  let component: SextoSemComponent;
  let fixture: ComponentFixture<SextoSemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SextoSemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SextoSemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
