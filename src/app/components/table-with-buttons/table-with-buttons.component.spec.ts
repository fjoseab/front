import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithButtonsComponent } from './table-with-buttons.component';

describe('TableWithButtonsComponent', () => {
  let component: TableWithButtonsComponent;
  let fixture: ComponentFixture<TableWithButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableWithButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWithButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
