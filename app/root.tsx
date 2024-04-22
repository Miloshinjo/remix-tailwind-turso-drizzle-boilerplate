import type { MetaFunction } from '@remix-run/node';
import { Document } from './components/document/Document';
import { Outlet, isRouteErrorResponse, useRouteError } from '@remix-run/react';

import './global.css';

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Remix Tailwind Turso Drizzle Boilerplate',
      description:
        "This is a boilerplate project for Remix that includes Turso's Drizzle ORM and a SQLite database.",
    },
  ];
};

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <Document>404</Document>;
    }

    return <Document>500</Document>;
  }

  if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  }

  return <h1>Unknown Error</h1>;
}
