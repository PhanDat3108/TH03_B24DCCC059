import { SanPham } from "../types/sanPham";

export type HanhDong =
  | { loai: "ADD"; duLieu: Omit<SanPham, "id"> }
  | { loai: "UPDATE"; duLieu: SanPham }
  | { loai: "DELETE"; id: number };

export const boXuLySanPham = (trangThai: SanPham[], hanhDong: HanhDong): SanPham[] => {
  switch (hanhDong.loai) {
    case "ADD": {
      const newId = trangThai.length ? Math.max(...trangThai.map(p => p.id)) + 1 : 1;
      const spMoi: SanPham = { id: newId, ...hanhDong.duLieu };
      return [...trangThai, spMoi];
    }
    case "UPDATE":
      return trangThai.map(sp => (sp.id === hanhDong.duLieu.id ? hanhDong.duLieu : sp));
    case "DELETE":
      return trangThai.filter(sp => sp.id !== hanhDong.id);
    default:
      return trangThai;
  }
};
