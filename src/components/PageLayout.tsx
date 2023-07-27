import { HexColor } from "@yext/studio";
import * as React from "react";
import Header from "./Header";

export interface LayoutProps {
  children?: React.ReactNode;
  backgroundColor?: HexColor;
}

export default function Layout({ children, backgroundColor }: LayoutProps) {
  return (
    <div className={`min-h-screen`} style={{ backgroundColor }}>
      <Header backgroundColor="#EDF0EB" iconName="home" />
      <main className="pt-24">{children}</main>
    </div>
  );
}
