import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Asosiy from "./pages/Asosiy";
import Darsliklar from "./pages/Darsliklar";
import Manbalar from "./pages/Manbalar";
import Boglanish from "./pages/Boglanish";
import Footer from "./pages/Footer";

const Primary = () => {
  return (
    <div className="primary">
      <Navbar />
      <hr id="hr" />
      <Routes >
        <Route path="/" element={<Asosiy />} />
        <Route path="/qollanma" element={<Darsliklar />} />
        <Route path="/manbalar" element={<Manbalar />} />
        <Route path="/boglanish" element={<Boglanish />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Primary;
