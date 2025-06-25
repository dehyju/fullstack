import { Outlet } from "react-router-dom";

function ExternalLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ExternalLayout;
