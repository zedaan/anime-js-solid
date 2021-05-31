import { Component } from 'solid-js';
import { Link } from 'solid-app-router';

const PageNotFound: Component = () => {
  return (
    <div className="not-found">
      <div>
        <h2>404: Page not found!</h2>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  )
}

export default PageNotFound;
