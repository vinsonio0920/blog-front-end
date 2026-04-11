import { Outlet } from "react-router";
import "./App.css";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { JwtContext } from "./jwt-context";
import { useState } from "react";

function App() {
  const [jwtToken, setJwtToken] = useState(localStorage.getItem("jwtToken"));
  const value = { jwtToken, setJwtToken };

  return (
    <JwtContext value={value}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </JwtContext>
  );
}

export { App };
