import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3>PhanDat Shop</h3>
          <p>Địa chỉ: 89 Ngõ Tân Lạc,Hai Bà Trưng, Hà Nội</p>
          <p>Email: Phandat6cdck@gmail.com</p>
          <p>Hotline: 0977574798</p>
        </div>

        <div className="footer-social">
          <h4>Kết nối với chúng tôi</h4>
          <a href="https://www.facebook.com/phandat3108" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://www.instagram.com/lowkeyyy__3108/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 MiniShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
