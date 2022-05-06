import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReticulasComponent } from './reticulas.component';

describe('ReticulasComponent', () => {
  let component: ReticulasComponent;
  let fixture: ComponentFixture<ReticulasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReticulasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReticulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
