import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Profile from ".//pages/Profile";
import Ledger from "./pages/Ledger";
import CompleteGames from "./pages/CompleteGames";
import Statement from "./pages/Statement";
import Casino from "./pages/Casino";
import Cricket from "./pages/Cricket";
import Matka from "./pages/Matka";
import ChangePassword from "./pages/ChangePassword";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Hero />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ledger" element={<Ledger />} />
          <Route path="/completeGames" element={<CompleteGames />} />
          <Route path="/statement" element={<Statement />} />
          <Route path="/casino" element={<Casino />} />
          <Route path="/cricket" element={<Cricket />} />
          <Route path="/matka" element={<Matka />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
