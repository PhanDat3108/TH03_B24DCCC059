import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuanLySanPham } from "../context/trangthaisanpham";
import "../styles/pageChiTietSanPham.css";

const ChiTietSanPham: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { dsSanPham } = useQuanLySanPham();
  const dieuHuong = useNavigate();

  const sanPham = dsSanPham.find((sp) => sp.id === Number(id));

  if (!sanPham) {
    return (
      <div className="chi-tiet-san-pham">
        <p>Không tìm thấy sản phẩm.</p>
        <button onClick={() => dieuHuong("/")}>Quay lại</button>
      </div>
    );
  }

  return (
    <div className="chi-tiet-san-pham">
      <button onClick={() => dieuHuong("/")} className="nut-quay-lai">
        ← Quay lại
      </button>
      <h2>{sanPham.ten}</h2>
      <img src={sanPham.anh || "/no-image.png"} alt={sanPham.ten} className="anh-sp"/>
      <p><strong>Danh mục:</strong> {sanPham.danhMuc}</p>
      <p><strong>Giá:</strong> {sanPham.gia.toLocaleString()}đ</p>
      <p><strong>Số lượng:</strong> {sanPham.soLuong}</p>
      <p><strong>Mô tả:</strong> {sanPham.moTa}</p>
    </div>
  );
};

export default ChiTietSanPham;
