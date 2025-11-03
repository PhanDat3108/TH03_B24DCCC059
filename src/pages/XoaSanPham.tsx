import React from "react";
import { useQuanLySanPham } from "../context/trangthaisanpham";
import "../styles/page_xoasanpham.css";


const XoaSanPham: React.FC = () => {
  const { dsSanPham, thucThi } = useQuanLySanPham();

  const handleXoa = (id: number) => {
    if (window.confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
      thucThi({ loai: "DELETE", id });
    }
  };

  return (
    <div className="page-xoa">
      <h3>Xóa sản phẩm</h3>
      <ul>
        {dsSanPham.map((sp) => (
          <li key={sp.id}>
            <span>{sp.ten}</span>
            <button onClick={() => handleXoa(sp.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default XoaSanPham;
