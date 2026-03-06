import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/NavBar";
import TopBar from "../components/layout/TopBar";
import { Outlet } from "react-router-dom";
import ScrollTopButton from "../components/ScrollTopButton";

const MainLayout = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollTopButton />
    </>
  );
};

export default MainLayout;