import React from "react";
import { useQuanLySanPham } from "../context/trangthaisanpham";
import "../styles/XoaSanPham.css";

const XoaSanPham: React.FC = () => {
  const { dsSanPham, thucThi } = useQuanLySanPham();

  const xoaSanPham = (id: number) => {
    if (window.confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
      thucThi({ loai: "DELETE", id });
    }
  };

  return (
    <div className="xoa-san-pham">
      <h2>Xóa sản phẩm</h2>
      <ul>
        {dsSanPham.map((sp) => (
          <li key={sp.id}>
            {sp.ten} - {sp.gia.toLocaleString()} ₫{" "}
            <button onClick={() => xoaSanPham(sp.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default XoaSanPham;
