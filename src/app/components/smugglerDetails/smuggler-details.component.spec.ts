import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmugglerDetailsComponent } from './smuggler-details.component';

describe('SmugglerDetailsComponent', () => {
  let component: SmugglerDetailsComponent;
  let fixture: ComponentFixture<SmugglerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmugglerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmugglerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
