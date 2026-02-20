# Lab 6.2 – Dynamic Routes & Query Parameters

## Description
Extended version of Lab 6.1 with dynamic routing and query parameters.

## New Features

### Dynamic Route
/courses/:id

Uses:
- useParams → reads URL parameter
- useLoaderData → loads course before rendering
- loader function → fetches course by ID
- errorElement → shows error for invalid ID

### Query Parameters
/courses?sort=asc  
/courses?sort=desc  

Uses:
- useSearchParams → reads and updates query string
- Sorting toggle button

## URL Params vs Query Params

URL Parameters:
Used for identifying a specific resource.
Example: /courses/1

Query Parameters:
Used for filtering or sorting data.
Example: /courses?sort=asc

## Tech Stack
- Vite
- React
- TypeScript (strict mode)
- react-router-dom v6