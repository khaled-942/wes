import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConferencesComponent } from './edit-conferences.component';

describe('EditConferencesComponent', () => {
  let component: EditConferencesComponent;
  let fixture: ComponentFixture<EditConferencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditConferencesComponent]
    });
    fixture = TestBed.createComponent(EditConferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
