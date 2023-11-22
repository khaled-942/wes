import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSpeakersComponent } from './edit-speakers.component';

describe('EditSpeakersComponent', () => {
  let component: EditSpeakersComponent;
  let fixture: ComponentFixture<EditSpeakersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSpeakersComponent]
    });
    fixture = TestBed.createComponent(EditSpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
