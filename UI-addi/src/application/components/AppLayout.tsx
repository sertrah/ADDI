import React, { FunctionComponent } from "react";
import Footer from "./Footer";
import Header from "./Header";

type AppLayoutProps = {
  children?: React.ReactNode;
  menu: { title: string; path: string }[];
};

const AppLayout: FunctionComponent<AppLayoutProps> = ({ children, menu }) => (
  <>
    <Header menu={menu} />
    <main id="main--container">{children}</main>
    <Footer />
  </>
);

export default AppLayout;
