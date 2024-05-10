import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TakePhotoTabPage } from './take-photo-tab.page';

describe('TakePhotoTabPage', () => {
  let component: TakePhotoTabPage;
  let fixture: ComponentFixture<TakePhotoTabPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TakePhotoTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
