import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1UpdateComponent } from './page1-update.component';

describe('Page1UpdateComponent', () => {
  let component: Page1UpdateComponent;
  let fixture: ComponentFixture<Page1UpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page1UpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page1UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
