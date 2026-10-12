import { TestBed } from '@angular/core/testing';

import { EmployeeManagementModule } from '../../employee-management.module';
import { EmployeeManagementComponent } from './employee-management.component';

describe('EmployeeManagementComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeManagementModule],
    }).compileComponents();
  });

  it('should create the feature page', () => {
    const fixture = TestBed.createComponent(EmployeeManagementComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show the feature heading', () => {
    const fixture = TestBed.createComponent(EmployeeManagementComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h1')?.textContent).toContain('Employee Management');
  });
});
