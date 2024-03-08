"use client";
import React from "react";
import { BoxHead } from "./PageContainer.style";

const PageContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <BoxHead>{children}</BoxHead>;
};
export default PageContainer;
