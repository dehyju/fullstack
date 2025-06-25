import { Outlet } from "react-router-dom";
import Navbar from "../components/external/navbar";

function ExternalLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col flex-grow mt-3">
        <Outlet />
      </div>
    </div>
  );
}

export default ExternalLayout;
