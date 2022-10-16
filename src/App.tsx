import { StyleProvider, ThemePicker } from "vcc-ui";
import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// COMPONENTS
import Main from "./pages/Main/Main";
import Learn from "./pages/Learn/Learn";
import Shop from "./pages/Shop/Shop";

// STORE
import { RootState } from "./store";

import "./style/index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <div>Error</div>,
  },
  {
    path: "learn/:id",
    element: <Learn />,
  },
  {
    path: "shop/:id",
    element: <Shop />,
  },
]);

const App = () => {
  const themeType = useSelector((state: RootState) => state.main.themeType);

  return (
    <StyleProvider>
      <ThemePicker variant={themeType}>
        <RouterProvider router={router} />
      </ThemePicker>
    </StyleProvider>
  );
};

export default App;
