import { App } from "./App";
import { Homepage } from "./homepage/Homepage";
import { ErrorPage } from "./error/ErrorPage";
import { homepageLoader } from "./loaders";
import { signUpAction, signInAction } from "./actions";
import { SignIn } from "./signIn/SignIn";
import { SignUp } from "./signUp/SignUp";
import { Post } from "./post/Post";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Homepage />, loader: homepageLoader },
      {
        path: "/posts/:postId",
        element: <Post />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/sign-up",
    action: signUpAction,
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    action: signInAction,
    element: <SignIn />,
  },
];

export { routes };
