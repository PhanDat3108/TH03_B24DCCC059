import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuanLySanPham } from "../context/trangthaisanpham";
import Navbar from "../components/Navbar";
import "../styles/page_trangchu.css";

const TrangChu: React.FC = () => {
  const { dsSanPham } = useQuanLySanPham();
  const [tuKhoa, setTuKhoa] = useState("");

  const dsLoc = dsSanPham.filter((sp) =>
    sp.ten.toLowerCase().includes(tuKhoa.toLowerCase())
  );

  return (
    <div className="trangchu">
      <Navbar tuKhoa={tuKhoa} setTuKhoa={setTuKhoa} />

      <div className="gianhang">
        {dsLoc.length === 0 ? (
          <p className="trong">Không có sản phẩm nào.</p>
        ) : (
          dsLoc.map((sp) => (
            <div key={sp.id} className="the-sanpham">
              <img src={sp.anh || "/no-image.png"} alt={sp.ten} />
              <div className="noi-dung">
                <h4>{sp.ten}</h4>
                <p>{sp.moTa}</p>
                <span className="gia">{sp.gia.toLocaleString()}đ</span>
                <div className="nut">
                  <Link to={`/products/${sp.id}`} className="xem">Xem</Link>
                  <Link to={`/edit/${sp.id}`} className="sua">Sửa</Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TrangChu;
