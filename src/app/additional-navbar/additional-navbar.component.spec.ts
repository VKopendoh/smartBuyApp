import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalNavbarComponent } from './additional-navbar.component';

describe('AdditionalNavbarComponent', () => {
  let component: AdditionalNavbarComponent;
  let fixture: ComponentFixture<AdditionalNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
