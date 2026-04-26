import { App } from "./App";
import { Homepage } from "./homepage/Homepage";
import { ErrorPage } from "./error/ErrorPage";
import { homepageLoader, postListLoader, postLoader } from "./loaders";
import { signUpAction, signInAction, postAction } from "./actions";
import { SignIn } from "./signIn/SignIn";
import { SignUp } from "./signUp/SignUp";
import { Post } from "./post/Post";
import { PostList } from "./postList/PostList";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Homepage />, loader: homepageLoader },
      {
        path: "/posts/:postId",
        action: postAction,
        element: <Post />,
        loader: postLoader,
      },
      {
        path: "/posts",
        element: <PostList />,
        loader: postListLoader,
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
