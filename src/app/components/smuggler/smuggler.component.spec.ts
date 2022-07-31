import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmugglerComponent } from './smuggler.component';

describe('SmugglerComponent', () => {
  let component: SmugglerComponent;
  let fixture: ComponentFixture<SmugglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmugglerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmugglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
