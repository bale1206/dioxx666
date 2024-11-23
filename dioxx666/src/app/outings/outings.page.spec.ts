import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OutingsPage } from './outings.page';

describe('OutingsPage', () => {
  let component: OutingsPage;
  let fixture: ComponentFixture<OutingsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OutingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
