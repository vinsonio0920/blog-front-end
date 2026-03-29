import { Outlet } from "react-router";
import "./App.css";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export { App };
