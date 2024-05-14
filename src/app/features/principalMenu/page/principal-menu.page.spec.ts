import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrincipalMenuPage } from './principal-menu.page';

describe('PrincipalMenuPage', () => {
  let component: PrincipalMenuPage;
  let fixture: ComponentFixture<PrincipalMenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
