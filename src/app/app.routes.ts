import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'employee-management',
  },
  {
    path: 'employee-management',
    loadChildren: () =>
      import('./employee-management/employee-management.module').then(
        (module) => module.EmployeeManagementModule,
      ),
  },
];
