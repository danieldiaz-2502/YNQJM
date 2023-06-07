import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomefinalComponent } from './homefinal.component';

describe('HomefinalComponent', () => {
  let component: HomefinalComponent;
  let fixture: ComponentFixture<HomefinalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomefinalComponent]
    });
    fixture = TestBed.createComponent(HomefinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
