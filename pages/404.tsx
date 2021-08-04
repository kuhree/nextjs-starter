import Link from 'next/link';
import * as React from 'react';

export default function NotFoundPage() {
  return (
    <>
      <h1>Whoops! Looks like we'e having trouble finding that page.</h1>

      <p>
        <Link href="/">
          <a>Go Home</a>
        </Link>
      </p>
    </>
  );
}
