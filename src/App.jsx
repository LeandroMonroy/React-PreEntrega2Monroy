import React from "react";
import "./App.css";

//REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//COMPONENTES
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

//PAGES
import HomePage from "./pages/HomePage/HomaPage";
import MyAccountPage from "./pages/MyAccountPage/MyAccountPage";
import PokedexPage from "./pages/PokedexPage/PokedexPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <NavBar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pokedex" element={<PokedexPage />} />
            <Route path="/myaccount" element={<MyAccountPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
