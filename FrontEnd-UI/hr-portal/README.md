# HR Portal - Employee & Leave Management System

A modern, full-stack HR management application for streamlining employee management and leave request workflows.

## Overview

**HR Portal** is a web-based application designed to help organizations manage their workforce efficiently. It provides separate interfaces for HR managers and employees with role-based access control.

**HR Managers** can:
- Add new employee records to the system
- View all employees and their details
- Review and approve/reject pending leave requests

**Employees** can:
- Complete their profile during first login
- View their personal profile information
- Apply for leave with reason and duration
- Track the status of all leave requests

## Key Features

✅ **Dual-Role Authentication** - Separate login flows for HR managers and employees  
✅ **Employee Management** - Add, view, and manage employee records  
✅ **Leave Management** - Employees request leaves; HR approves/rejects with real-time updates  
✅ **Profile Management** - Employees complete and view their profile details  
✅ **Responsive Design** - Professional UI built with Tailwind CSS, works on desktop & mobile  
✅ **Real-time Updates** - Instant feedback on actions (success/error messages)  

## Technology Stack

- **Frontend Framework**: React 19 with Hooks
- **Styling**: Tailwind CSS v4 with custom component system
- **Build Tool**: Vite 7
- **Routing**: React Router v7
- **HTTP Client**: Axios
- **Package Manager**: npm

## Installation & Setup

### Prerequisites
- Node.js 16+
- npm 8+

### Installation

```bash
# Install dependencies
npm install

# Install Tailwind CSS dependencies
npm install -D @tailwindcss/postcss autoprefixer

# Start development server
npm run dev
```

The application will run on `http://localhost:5173` (or another available port shown in terminal).

## Project Structure

```
src/
├── components/          # React components
│   ├── Login.jsx       # Authentication entry point
│   ├── SignUp.jsx      # Employee profile completion
│   ├── HrDashboard.jsx # HR manager main portal
│   ├── EmployeesDashBoard.jsx # Employee main portal
│   ├── AddEmployee.jsx # Add new employee form
│   ├── ViewEmployees.jsx # Employee list (HR view)
│   ├── ApplyLeave.jsx  # Leave request form
│   ├── ViewLeaves.jsx  # Pending leave approvals (HR view)
│   ├── LeaveStatus.jsx # Leave history (Employee view)
│   ├── ViewEmpProfile.jsx # Employee profile display
│   └── EmployeeContext.jsx # Global state management
├── service/            # API integration
│   ├── loginService.js
│   ├── employeeService.js
│   └── leaveService.js
├── App.jsx            # Main app component with routes
├── main.jsx           # Entry point
└── index.css          # Global styles & Tailwind directives
```

## Key Components

| Component | Purpose |
|-----------|---------|
| **Login** | Authentication for both HR and employees |
| **HrDashboard** | Navigation hub for HR operations (Add Employee, View Employees, Manage Leaves) |
| **EmployeesDashBoard** | Navigation hub for employee self-service (Profile, Apply Leave, Leave Status) |
| **AddEmployee** | Form to register new employees |
| **ViewEmployees** | Table showing all employees with status |
| **ApplyLeave** | Leave request form with reason and duration |
| **ViewLeaves** | HR interface to approve/reject pending requests |
| **LeaveStatus** | Employee's leave history with approval status |

## User Workflows

### HR Manager Workflow
1. Login with HR credentials
2. Navigate to HR Dashboard
3. Options:
   - **Add Employee**: Create new employee records
   - **View Employees**: See all registered employees
   - **Leave Requests**: Review and approve/reject pending leave applications

### Employee Workflow
1. First login with email → Complete profile in Sign Up
2. Navigate to Employee Dashboard
3. Options:
   - **View Profile**: See personal details
   - **Apply Leave**: Request time off with reason
   - **Leave Status**: Check approval status of requests

## Design System

The application features a **professional HR color scheme**:
- **Primary**: Sky Blue (#0284c7) - Main action buttons and highlights
- **Success**: Emerald Green (#10b981) - Approved/positive states
- **Warning**: Amber (#f59e0b) - Pending/attention states
- **Danger**: Red (#ef4444) - Rejected/error states

**Components Include**:
- Gradient backgrounds and modern card layouts
- Responsive grid system (mobile: 1 column, tablet: 2 columns, desktop: 3 columns)
- Interactive buttons with hover effects and transitions
- Form inputs with validation and focus states
- Data tables with striped rows and badges for status

## API Integration

The frontend connects to a backend REST API with these endpoints:
- `GET/POST /employeeInformation` - Employee data
- `GET/POST/PUT /leaveInformation` - Leave requests

## Development Notes

- **State Management**: Uses React Context API for global employee data
- **Routing**: Protected routes ensure only authenticated users can access their dashboards
- **Error Handling**: Try-catch blocks with user-friendly error messages
- **Performance**: Vite's fast hot module replacement (HMR) for development

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.
