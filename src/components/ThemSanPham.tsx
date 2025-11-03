import React, { useState } from "react";
import { useQuanLySanPham } from "../context/trangthaisanpham";
import "../styles/ThemSanPham.css";

const ThemSanPham: React.FC = () => {
  const { thucThi } = useQuanLySanPham();
  const [ten, setTen] = useState("");
  const [moTa, setMoTa] = useState("");
  const [gia, setGia] = useState("");
  const [soLuong, setSoLuong] = useState("");
  const [danhMuc, setDanhMuc] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ten || !gia) return;

    thucThi({
      loai: "ADD",
      duLieu: {
        ten,
        moTa,
        gia: parseFloat(gia),
        soLuong: parseInt(soLuong) || 0,
        danhMuc,
      },
    });

    setTen("");
    setMoTa("");
    setGia("");
    setSoLuong("");
    setDanhMuc("");
  };

  return (
    <form className="form-them" onSubmit={handleSubmit}>
      <h2>Thêm sản phẩm</h2>
      <input
        type="text"
        placeholder="Tên sản phẩm"
        value={ten}
        onChange={(e) => setTen(e.target.value)}
      />
      <input
        type="text"
        placeholder="Mô tả"
        value={moTa}
        onChange={(e) => setMoTa(e.target.value)}
      />
      <input
        type="number"
        placeholder="Giá"
        value={gia}
        onChange={(e) => setGia(e.target.value)}
      />
      <input
        type="number"
        placeholder="Số lượng"
        value={soLuong}
        onChange={(e) => setSoLuong(e.target.value)}
      />
      <input
        type="text"
        placeholder="Danh mục"
        value={danhMuc}
        onChange={(e) => setDanhMuc(e.target.value)}
      />
      <button type="submit">Thêm</button>
    </form>
  );
};

export default ThemSanPham;
