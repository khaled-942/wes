import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConferencesComponent } from './create-conferences.component';

describe('CreateConferencesComponent', () => {
  let component: CreateConferencesComponent;
  let fixture: ComponentFixture<CreateConferencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateConferencesComponent]
    });
    fixture = TestBed.createComponent(CreateConferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
