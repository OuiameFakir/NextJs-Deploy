"use client";
import { ReactNode } from "react";
import { BoxBody } from "./BodyContainer.style";

const BodyContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <BoxBody>{children}</BoxBody>;
};
export default BodyContainer;
