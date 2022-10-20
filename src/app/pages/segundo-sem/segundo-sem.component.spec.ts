import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoSemComponent } from './segundo-sem.component';

describe('SegundoSemComponent', () => {
  let component: SegundoSemComponent;
  let fixture: ComponentFixture<SegundoSemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundoSemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundoSemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
