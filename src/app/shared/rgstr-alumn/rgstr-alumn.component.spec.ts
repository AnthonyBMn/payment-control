import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgstrAlumnComponent } from './rgstr-alumn.component';

describe('RgstrAlumnComponent', () => {
  let component: RgstrAlumnComponent;
  let fixture: ComponentFixture<RgstrAlumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgstrAlumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgstrAlumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
