import { App } from "./App";
import { Homepage } from "./homepage/Homepage";
import { ErrorPage } from "./error/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <Homepage /> }],
    errorElement: <ErrorPage />,
  },
];

export { routes };
