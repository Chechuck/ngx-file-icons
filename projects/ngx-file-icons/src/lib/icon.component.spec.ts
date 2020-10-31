import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';

// Components
import { IconComponent } from './icon.component';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should show small blank classic icon', () => {
    fixture.detectChanges();
    const icon = fixture.debugElement.query(By.css('.fiv-cla.fiv-icon-blank'));
    expect(icon).toBeTruthy();
  });

  it('Should show huge pdf square outlined icon', () => {
    component.set = 'vivid';
    component.type = 'pdf';
    component.size = 'xl';
    fixture.detectChanges();
    const icon = fixture.debugElement.query(By.css('.fiv-viv.fiv-icon-pdf.fiv-size-xl'));
    expect(icon).toBeTruthy();
  });

  it('Should show default icon', () => {
    component.set = 'test';
    component.type = 'test';
    component.size = 'test';
    fixture.detectChanges();
    const icon = fixture.debugElement.query(By.css('.fiv-cla.fiv-icon-blank'));
    expect(icon).toBeTruthy();
  });
});
