import { App } from "./App";
import { Homepage } from "./homepage/Homepage";
import { ErrorPage } from "./error/ErrorPage";
import { homepageLoader } from "./loaders";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <Homepage />, loader: homepageLoader }],
    errorElement: <ErrorPage />,
  },
];

export { routes };
