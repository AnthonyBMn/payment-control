import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctavoSemComponent } from './octavo-sem.component';

describe('OctavoSemComponent', () => {
  let component: OctavoSemComponent;
  let fixture: ComponentFixture<OctavoSemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OctavoSemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OctavoSemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
