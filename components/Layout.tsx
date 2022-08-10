import React from "react";
import Navbar from "./Navbar";
import { Space } from "@mantine/core";
type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <Space mb="xl" />
      {children}
    </div>
  );
};

export default Layout;
