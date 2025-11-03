import React from "react";
import { Link } from "react-router-dom";
import "../styles/page_trangchu.css"; 
import logo from "../styles/Gemini_Generated_Image_odze84odze84odze (1)-Photoroom.png";




interface NavbarProps {
  tuKhoa: string;
  setTuKhoa: (value: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ tuKhoa, setTuKhoa }) => {
  return (
    <nav className="navbar">
     <div className="logo">
  <img src={logo} alt="Logo" />
</div>

      <div className="timkiem">
        <input
          type="text"
          placeholder="Tìm sản phẩm..."
          value={tuKhoa}
          onChange={(e) => setTuKhoa(e.target.value)}
        />
      </div>
      <div className="nav-links">
        <Link to="/">Trang chủ</Link>
        <Link to="/add">Thêm sản phẩm</Link>
      </div>
    </nav>
  );
};

export default Navbar;
