import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QuanLySanPhamProvider } from "./context/trangthaisanpham";
import DanhSachSanPham from "./components/DanhSachSanPham";
import ThemSanPham from "./pages/ThemSanPham";
import ChinhSuaSanPham from "./pages/ChinhSuaSanPham";
import ChiTietSanPham from "./pages/ChiTietSanPham";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  const [tuKhoa, setTuKhoa] = useState("");

  return (
    <QuanLySanPhamProvider>
      <Router>
        <Navbar tuKhoa={tuKhoa} setTuKhoa={setTuKhoa} />
        <Routes>
          <Route path="/" element={<DanhSachSanPham tuKhoa={tuKhoa} />} />
          <Route path="/add" element={<ThemSanPham />} />
          <Route path="/edit/:id" element={<ChinhSuaSanPham />} />
          <Route path="/products/:id" element={<ChiTietSanPham />} />
        </Routes>
      </Router>
    </QuanLySanPhamProvider>
  );
};

export default App;

