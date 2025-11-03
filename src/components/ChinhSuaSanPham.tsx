import React, { useState } from "react";
import { useQuanLySanPham } from "../context/trangthaisanpham";
import { SanPham } from "../types/sanPham";
import "../styles/ChinhSuaSanPham.css";

const ChinhSuaSanPham: React.FC = () => {
  const { dsSanPham, thucThi } = useQuanLySanPham();
  const [chon, setChon] = useState<number | null>(null);
  const [duLieu, setDuLieu] = useState<Omit<SanPham, "id">>({
    ten: "",
    moTa: "",
    gia: 0,
    soLuong: 0,
    danhMuc: "",
  });

  const chonSanPham = (id: number) => {
    const sp = dsSanPham.find((s) => s.id === id);
    if (sp) {
      setChon(sp.id);
      setDuLieu({
        ten: sp.ten,
        moTa: sp.moTa,
        gia: sp.gia,
        soLuong: sp.soLuong,
        danhMuc: sp.danhMuc,
      });
    }
  };

  const capNhatSanPham = (e: React.FormEvent) => {
    e.preventDefault();
    if (chon === null) return;
    thucThi({
      loai: "UPDATE",
      duLieu: { id: chon, ...duLieu },
    });
    setChon(null);
    setDuLieu({ ten: "", moTa: "", gia: 0, soLuong: 0, danhMuc: "" });
  };

  return (
    <div className="chinh-sua">
      <h2>Chỉnh sửa sản phẩm</h2>
      <select value={chon ?? ""} onChange={(e) => chonSanPham(Number(e.target.value))}>
        <option value="">-- Chọn sản phẩm --</option>
        {dsSanPham.map((sp) => (
          <option key={sp.id} value={sp.id}>
            {sp.ten}
          </option>
        ))}
      </select>

      {chon && (
        <form onSubmit={capNhatSanPham} className="form-chinh-sua">
          <input
            type="text"
            placeholder="Tên sản phẩm"
            value={duLieu.ten}
            onChange={(e) => setDuLieu({ ...duLieu, ten: e.target.value })}
          />
          <input
            type="text"
            placeholder="Mô tả"
            value={duLieu.moTa}
            onChange={(e) => setDuLieu({ ...duLieu, moTa: e.target.value })}
          />
          <input
            type="number"
            placeholder="Giá"
            value={duLieu.gia}
            onChange={(e) => setDuLieu({ ...duLieu, gia: Number(e.target.value) })}
          />
          <input
            type="number"
            placeholder="Số lượng"
            value={duLieu.soLuong}
            onChange={(e) => setDuLieu({ ...duLieu, soLuong: Number(e.target.value) })}
          />
          <input
            type="text"
            placeholder="Danh mục"
            value={duLieu.danhMuc}
            onChange={(e) => setDuLieu({ ...duLieu, danhMuc: e.target.value })}
          />
          <button type="submit">Cập nhật</button>
        </form>
      )}
    </div>
  );
};

export default ChinhSuaSanPham;
