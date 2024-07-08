import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="overflow-hidden">
      <Outlet />
    </div>
  );
};
