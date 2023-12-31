import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionInputComponent } from './section-input.component';

describe('SectionInputComponent', () => {
  let component: SectionInputComponent;
  let fixture: ComponentFixture<SectionInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
