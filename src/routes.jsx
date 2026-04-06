import { App } from "./App";
import { Homepage } from "./homepage/Homepage";
import { ErrorPage } from "./error/ErrorPage";
import { homepageLoader } from "./loaders";
import { SignIn } from "./signIn/SignIn";
import { SignUp } from "./signUp/SignUp";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <Homepage />, loader: homepageLoader }],
    errorElement: <ErrorPage />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
];

export { routes };
