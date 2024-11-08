import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import Home from "./Pages/LifeInsurance";
import Travel from "./Pages/Travel";

function App() {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
