import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuanLySanPham } from "../context/trangthaisanpham";
import "../styles/page_chinhsuasanpham.css";

const ChinhSuaSanPham: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { dsSanPham, thucThi } = useQuanLySanPham();
  const navigate = useNavigate();

  const sp = dsSanPham.find((item) => item.id === Number(id));

  const [ten, setTen] = useState(sp?.ten || "");
  const [moTa, setMoTa] = useState(sp?.moTa || "");
  const [gia, setGia] = useState<number>(sp?.gia || 0);

  const capNhatSanPham = () => {
    if (!sp) return;
    thucThi({
      loai: "UPDATE",
      duLieu: { ...sp, ten, moTa, gia },
    });
    navigate("/");
  };

  if (!sp) {
    return <p>Không tìm thấy sản phẩm cần chỉnh sửa.</p>;
  }

  return (
    <div className="form-chinhsua">
      <h3>Chỉnh sửa sản phẩm</h3>
      <input
        type="text"
        value={ten}
        onChange={(e) => setTen(e.target.value)}
        placeholder="Tên sản phẩm"
      />
      <textarea
        value={moTa}
        onChange={(e) => setMoTa(e.target.value)}
        placeholder="Mô tả"
      />
      <input
        type="number"
        value={gia}
        onChange={(e) => setGia(Number(e.target.value))}
        placeholder="Giá"
      />
      <div className="nut">
        <button onClick={capNhatSanPham}>Cập nhật</button>
        <button onClick={() => navigate("/")}>Hủy</button>
      </div>
    </div>
  );
};

export default ChinhSuaSanPham;
export {};
