import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Map2tryComponent } from './map2try.component';

describe('Map2tryComponent', () => {
  let component: Map2tryComponent;
  let fixture: ComponentFixture<Map2tryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Map2tryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Map2tryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
