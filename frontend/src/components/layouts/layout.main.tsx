import { Outlet } from "react-router-dom";
import NavbarMain from "./navbars/navbar.main";

const MainLayout = () => {
  //state
  return (
    <div className=" h-screen">
      <NavbarMain />
      <Outlet />

    </div>

  );
};

export default MainLayout;
