import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuanLySanPham } from "../context/trangthaisanpham";
import "../styles/pagethemsanpham.css";

const ThemSanPham: React.FC = () => {
  const { thucThi } = useQuanLySanPham();
  const dieuHuong = useNavigate();

  const [ten, setTen] = useState("");
  const [danhMuc, setDanhMuc] = useState("");
  const [gia, setGia] = useState<number | "">("");
  const [soLuong, setSoLuong] = useState<number | "">("");
  const [moTa, setMoTa] = useState("");
  const [loi, setLoi] = useState("");

  const xuLyThem = (e: React.FormEvent) => {
    e.preventDefault();

    if (ten.trim().length < 3) return setLoi("Tên sản phẩm phải có ít nhất 3 ký tự");
    if (!danhMuc) return setLoi("Vui lòng chọn danh mục");
    if (!gia || gia <= 0) return setLoi("Giá phải là số dương");
    if (!soLuong || soLuong <= 0 || !Number.isInteger(soLuong)) return setLoi("Số lượng phải là số nguyên dương");

    thucThi({
      loai: "ADD",
      duLieu: { ten, danhMuc, gia: Number(gia), soLuong: Number(soLuong), moTa },
    });

    dieuHuong("/");
  };

  return (
    <div className="form-them-san-pham">
      <h2>Thêm sản phẩm mới</h2>
      {loi && <p className="loi">{loi}</p>}

      <form onSubmit={xuLyThem}>
        <div>
          <label>Tên sản phẩm:</label>
          <input value={ten} onChange={(e) => setTen(e.target.value)} />
        </div>

        <div>
          <label>Danh mục:</label>
          <select value={danhMuc} onChange={(e) => setDanhMuc(e.target.value)}>
            <option value="">-- Chọn danh mục --</option>
            <option value="Điện tử">Điện tử</option>
            <option value="Quần áo">Quần áo</option>
            <option value="Đồ ăn">Đồ ăn</option>
            <option value="Sách">Sách</option>
            <option value="Khác">Khác</option>
          </select>
        </div>

        <div>
          <label>Giá:</label>
          <input type="number" value={gia} onChange={(e) => setGia(Number(e.target.value))} />
        </div>

        <div>
          <label>Số lượng:</label>
          <input type="number" value={soLuong} onChange={(e) => setSoLuong(Number(e.target.value))} />
        </div>

        <div>
          <label>Mô tả:</label>
          <textarea value={moTa} onChange={(e) => setMoTa(e.target.value)} />
        </div>

        <button type="submit">Thêm sản phẩm</button>
      </form>
    </div>
  );
};

export default ThemSanPham;
