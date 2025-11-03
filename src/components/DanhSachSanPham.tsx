import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuanLySanPham } from "../context/trangthaisanpham";
import "../styles/DanhSachSanPham.css";

interface DanhSachSanPhamProps {
  tuKhoa: string;
}

const DanhSachSanPham: React.FC<DanhSachSanPhamProps> = ({ tuKhoa }) => {
  const { dsSanPham, thucThi } = useQuanLySanPham();
  const [trangHienTai, setTrangHienTai] = useState(1);
  const soSanPhamMoiTrang = 8;

  const dsLoc = dsSanPham.filter((sp) =>
    sp.ten.toLowerCase().includes(tuKhoa.toLowerCase())
  );

  const tongTrang = Math.ceil(dsLoc.length / soSanPhamMoiTrang);

  const dsHienTai = dsLoc.slice(
    (trangHienTai - 1) * soSanPhamMoiTrang,
    trangHienTai * soSanPhamMoiTrang
  );

  const xoaSanPham = (id: number) => {
    if (window.confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
      thucThi({ loai: "DELETE", id });
    }
  };

  return (
    <div className="page-danhsach">
      

      {dsHienTai.length === 0 ? (
        <p>Không có sản phẩm nào.</p>
      ) : (
        <>
          <div className="grid-sanpham">
            {dsHienTai.map((sp) => (
              <div key={sp.id} className="item-sp">
                <img
                  src={sp.anh || "/no-image.png"}
                  alt={sp.ten}
                  className="anh-sp"
                />
                <div className="thongtin">
                  <h4>{sp.ten}</h4>
                  <p>{sp.moTa}</p>
                  <p>Giá: {sp.gia.toLocaleString()}đ</p>
                </div>
                <div className="hanhdong">
                  <Link to={`/products/${sp.id}`} className="nut-xem">
                    Xem
                  </Link>
                  <Link to={`/edit/${sp.id}`} className="nut-sua">
                    Sửa
                  </Link>
                  <button
                    onClick={() => xoaSanPham(sp.id)}
                    className="nut-xoa"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="phan-trang">
            <button
              disabled={trangHienTai === 1}
              onClick={() => setTrangHienTai(trangHienTai - 1)}
            >
              ← Trước
            </button>
            {Array.from({ length: tongTrang }, (_, i) => (
              <button
                key={i}
                className={trangHienTai === i + 1 ? "active" : ""}
                onClick={() => setTrangHienTai(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={trangHienTai === tongTrang}
              onClick={() => setTrangHienTai(trangHienTai + 1)}
            >
              Sau →
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DanhSachSanPham;
