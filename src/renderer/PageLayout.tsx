import React from "react";
import "./PageLayout.css";

export const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <React.StrictMode>{children}</React.StrictMode>
);
