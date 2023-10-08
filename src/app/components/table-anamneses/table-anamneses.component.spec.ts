import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAnamnesesComponent } from './table-anamneses.component';

describe('TableAnamnesesComponent', () => {
  let component: TableAnamnesesComponent;
  let fixture: ComponentFixture<TableAnamnesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAnamnesesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAnamnesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
