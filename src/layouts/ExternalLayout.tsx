import { Outlet } from "react-router-dom";
import Navbar from "../components/external/navbar";

function ExternalLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default ExternalLayout;
