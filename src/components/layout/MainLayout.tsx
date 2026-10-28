import { Outlet } from "react-router";
import Footer from "../organisms/Footer";
import Navbar from "../organisms/Navbar";

function MainLayout() {
  return (
    <div className="flex flex-col gap-3">
      <Navbar />
      <main className="mt-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
