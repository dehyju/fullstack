import { Outlet } from "react-router-dom";
import Navbar from "../components/external/navbar";

function ExternalLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}

export default ExternalLayout;
