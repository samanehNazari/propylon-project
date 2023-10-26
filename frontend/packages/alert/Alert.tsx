import React from "react";
import { FC, ReactNode } from "react";

export interface AlertProps {
  children: ReactNode;
}

export const Alert: FC<AlertProps> = ({ children }) => (
  <div className="flex h-screen justify-center items-center gap-1">
    {children}
  </div>
);
