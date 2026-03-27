import { App } from "./App";
import { Homepage } from "./homepage/Homepage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <Homepage /> }],
  },
];

export { routes };
