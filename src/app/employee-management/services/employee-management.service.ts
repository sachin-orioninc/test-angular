import { Injectable, signal } from '@angular/core';

import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeManagementService {
  private readonly employeeStore = signal<readonly Employee[]>([]);

  readonly employees = this.employeeStore.asReadonly();
}
