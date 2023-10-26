import clsx from "clsx";
import { MobileSidebar } from "./mobile-sidebar";
import { FC, ReactNode, useState } from "react";

export interface SidebarProps {
  children: ReactNode;
}

export const Sidebar: FC<SidebarProps> = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <MobileSidebar
        showSidebar={showSidebar}
        onToggleSidebar={() => setShowSidebar((prev) => !prev)}
      />
      <aside
        aria-label="Sidebar"
        className={clsx(
          "w-64 fixed h-screen border left-0 top-0 overflow-y-scroll bg-white z-40 transition-[margin-left] ease-in-out duration-300 ml-0",
          { "max-sm:ml-[-16rem]": !showSidebar }
        )}
      >
        {children}
      </aside>
    </>
  );
};
