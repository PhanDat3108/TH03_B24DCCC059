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
  const [danhMucChon, setDanhMucChon] = useState("");
  const [sapXep, setSapXep] = useState(""); 
  const soSanPhamMoiTrang = 8;


  let dsLoc = dsSanPham.filter((sp) => {
    const theoTuKhoa = sp.ten.toLowerCase().includes(tuKhoa.toLowerCase());
    const theoDanhMuc = danhMucChon ? sp.danhMuc === danhMucChon : true;
    return theoTuKhoa && theoDanhMuc;
  });


  if (sapXep === "gia-tang") {
    dsLoc = dsLoc.sort((a, b) => a.gia - b.gia);
  } else if (sapXep === "gia-giam") {
    dsLoc = dsLoc.sort((a, b) => b.gia - a.gia);
  } else if (sapXep === "ten-az") {
    dsLoc = dsLoc.sort((a, b) => a.ten.localeCompare(b.ten));
  } else if (sapXep === "ten-za") {
    dsLoc = dsLoc.sort((a, b) => b.ten.localeCompare(a.ten));
  }

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
    
      <div className="loc-sanpham">
        <label>Danh mục:</label>
        <select
          value={danhMucChon}
          onChange={(e) => {
            setDanhMucChon(e.target.value);
            setTrangHienTai(1);
          }}
        >
          <option value="">Tất cả</option>
          <option value="Điện tử">Điện tử</option>
          <option value="Quần áo">Quần áo</option>
          <option value="Đồ ăn">Đồ ăn</option>
          <option value="Sách">Sách</option>
          <option value="Khác">Khác</option>
        </select>

        <label>Sắp xếp:</label>
        <select
          value={sapXep}
          onChange={(e) => {
            setSapXep(e.target.value);
            setTrangHienTai(1);
          }}
        >
          <option value="">Mặc định</option>
          <option value="gia-tang">Giá: Thấp → Cao</option>
          <option value="gia-giam">Giá: Cao → Thấp</option>
          <option value="ten-az">Tên: A → Z</option>
          <option value="ten-za">Tên: Z → A</option>
        </select>
      </div>

      {}
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

          {}
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
