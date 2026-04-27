import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { JwtContext } from "./jwt-context";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [jwtToken, setJwtToken] = useState(localStorage.getItem("jwtToken"));
  const value = { jwtToken, setJwtToken };

  // check if token is expired
  if (jwtToken) {
    const decoded = jwtDecode(jwtToken);
    const currentDate = new Date();
    const secondsSinceEpoch = currentDate.getTime() / 1000;
    if (secondsSinceEpoch > decoded.exp) {
      console.log("Expired!");
      localStorage.removeItem("jwtToken");
      setJwtToken(null);
    }
  }

  return (
    <JwtContext value={value}>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </JwtContext>
  );
}

export { App };
