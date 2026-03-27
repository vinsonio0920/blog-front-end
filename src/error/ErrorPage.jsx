import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <p>The page you are looking for doesn't exist.</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
};

export { ErrorPage };
