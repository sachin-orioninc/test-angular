# EmployeeManagement

An Angular 21 starter application with a lazily loaded `EmployeeManagementModule`.

## Requirements

- Node.js 20.19.0 or newer (or 22.12.0 or newer)
- npm

## Install and run

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200). The root route redirects to
`/employee-management`.

## Project structure

```text
src/
  app/
    employee-management/
      components/employee-management/
      models/
      services/
      employee-management-routing.module.ts
      employee-management.module.ts
    app.config.ts
    app.routes.ts
  environments/
```

The application shell uses Angular's standalone bootstrap APIs; the feature is
organized as an `NgModule` and loaded lazily through the root router. This keeps
the feature isolated while allowing the app shell to follow current Angular
conventions.

## Commands

```bash
npm start     # Run the development server
npm run build # Create a production build
npm test      # Run unit tests with Vitest
```

Environment-specific values live in `src/environments`. The development
environment is used by default and the production build replaces it with the
production configuration.
