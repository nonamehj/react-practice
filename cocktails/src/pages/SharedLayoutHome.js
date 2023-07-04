import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const SharedLayoutHome = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default SharedLayoutHome;
