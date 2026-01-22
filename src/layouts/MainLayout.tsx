import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MainLayout = () => {
  const location = useLocation();

  /* Reduce visual noise on blog reading pages */
  const isBlogPage = location.pathname.startsWith("/blogs");

  return (
    <div className="min-h-screen bg-background font-sans antialiased flex flex-col">
      
      {/* Navbar */}
      <div className={isBlogPage ? "opacity-95 backdrop-blur-md" : ""}>
        <Navbar />
      </div>

      {/* Main Content */}
      <main
        className={`flex-1 relative ${
          isBlogPage
            ? "bg-background"
            : "bg-background"
        }`}
      >
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
