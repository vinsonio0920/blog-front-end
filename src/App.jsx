import { Outlet } from "react-router";
import "./App.css";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export { App };
