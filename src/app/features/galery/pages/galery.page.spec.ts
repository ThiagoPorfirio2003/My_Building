import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GaleryPage } from './galery.page';

describe('GaleryPage', () => {
  let component: GaleryPage;
  let fixture: ComponentFixture<GaleryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
