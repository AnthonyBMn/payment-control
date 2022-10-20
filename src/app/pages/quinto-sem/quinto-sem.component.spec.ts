import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuintoSemComponent } from './quinto-sem.component';

describe('QuintoSemComponent', () => {
  let component: QuintoSemComponent;
  let fixture: ComponentFixture<QuintoSemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuintoSemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuintoSemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
