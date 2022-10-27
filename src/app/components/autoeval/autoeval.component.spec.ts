import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoevalComponent } from './autoeval.component';

describe('AutoevalComponent', () => {
  let component: AutoevalComponent;
  let fixture: ComponentFixture<AutoevalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoevalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoevalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
