import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnamneseListComponent } from './anamnese-list.component';

describe('AnamneseListComponent', () => {
  let component: AnamneseListComponent;
  let fixture: ComponentFixture<AnamneseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnamneseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnamneseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
