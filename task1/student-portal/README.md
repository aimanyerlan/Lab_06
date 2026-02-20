# Lab 6.1 – Multi-Page Application with React Router

## Description
This project is a simple Student Portal built with Vite + React + TypeScript.

It demonstrates:
- createBrowserRouter for route configuration
- RouterProvider for rendering routes
- Layout component with Outlet
- Navigation using Link (client-side routing)
- 404 Not Found route handling

## Route Structure

/ → Home  
/courses → Courses  
/about → About  
* → NotFound  

## Key Concepts Used

- createBrowserRouter: Declares application routes
- RouterProvider: Connects router to React app
- Outlet: Renders matched child route
- Link: Navigates without full page reload

## Tech Stack
- Vite
- React
- TypeScript (strict mode enabled)
- react-router-dom v6