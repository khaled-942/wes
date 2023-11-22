import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConferencesComponent } from './view-conferences.component';

describe('ViewConferencesComponent', () => {
  let component: ViewConferencesComponent;
  let fixture: ComponentFixture<ViewConferencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewConferencesComponent]
    });
    fixture = TestBed.createComponent(ViewConferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
