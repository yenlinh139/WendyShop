import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/users/HomePage";
import ProfilePage from "./pages/users/ProfilePage";
import Product from "./pages/users/Product";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/theme/masterLayout";
import StorePage from "pages/users/StorePage";

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage />,
    },
    {
      path: ROUTERS.USER.PRODUCT,
      component: <Product />,
    },
    {
      path: ROUTERS.USER.STORE,
      component: <StorePage />,
    },
    {
      path: ROUTERS.USER.PROFILE,
      component: <ProfilePage />,
    },
  ];

  return (
    <MasterLayout>
      <Routes>
        {userRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;
