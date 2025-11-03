import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { boXuLySanPham, HanhDong } from "./xulysanpham";
import { SanPham } from "../types/sanPham";
import { danhSachSanPham } from "../data/danhSachSanPham";

type KieuQuanLySanPham = {
  dsSanPham: SanPham[];
  thucThi: React.Dispatch<HanhDong>;
};

const QuanLySanPhamContext = createContext<KieuQuanLySanPham | undefined>(undefined);

export const QuanLySanPhamProvider = ({ children }: { children: ReactNode }) => {
  const [dsSanPham, thucThi] = useReducer(boXuLySanPham, danhSachSanPham);
  return (
    <QuanLySanPhamContext.Provider value={{ dsSanPham, thucThi }}>
      {children}
    </QuanLySanPhamContext.Provider>
  );
};

export const useQuanLySanPham = () => {
  const ctx = useContext(QuanLySanPhamContext);
  if (!ctx) throw new Error("useQuanLySanPham phải được gọi trong QuanLySanPhamProvider");
  return ctx;
};
export {};
