import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnceavoSemComponent } from './onceavo-sem.component';

describe('OnceavoSemComponent', () => {
  let component: OnceavoSemComponent;
  let fixture: ComponentFixture<OnceavoSemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnceavoSemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnceavoSemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
