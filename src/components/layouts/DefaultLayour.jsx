import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function DefaultLayout() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Outlet />
      </main>
    </>
  );
}
