import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrettyUglyMenuComponent } from './pretty-ugly-menu.component';

describe('PrettyUglyMenuComponent', () => {
  let component: PrettyUglyMenuComponent;
  let fixture: ComponentFixture<PrettyUglyMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrettyUglyMenuComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrettyUglyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
