import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuComponent } from './tu.component';

describe('TuComponent', () => {
  let component: TuComponent;
  let fixture: ComponentFixture<TuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TuComponent]
    });
    fixture = TestBed.createComponent(TuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
