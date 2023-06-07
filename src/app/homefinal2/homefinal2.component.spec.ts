import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homefinal2Component } from './homefinal2.component';

describe('Homefinal2Component', () => {
  let component: Homefinal2Component;
  let fixture: ComponentFixture<Homefinal2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Homefinal2Component]
    });
    fixture = TestBed.createComponent(Homefinal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
