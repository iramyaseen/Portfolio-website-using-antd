import { Layout, Menu } from "antd";
import React from "react";
import Profile from "./Pages/ProfilePage";
const { Header } = Layout;
const items1 = ["About", "Portfolio", "Reference", "Contact"].map((key) => ({
  key,
  label: `${key}`,
  className: "item",
}));
const app = {
  backgroundColor: "#2d2d2d",
};

const NavbarsList = () => (
  <Layout style={app}>
    <Header className="responsive_navbar">
      <Menu mode="horizontal" items={items1} />
    </Header>
    <Profile />
  </Layout>
);

export default NavbarsList;
