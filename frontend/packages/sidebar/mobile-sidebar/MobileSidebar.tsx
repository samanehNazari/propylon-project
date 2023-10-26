import { Bars } from "@local/icons";
import { FC } from "react";

export interface MobileSidebarProps {
  onToggleSidebar: () => void;
  showSidebar: boolean;
}

export const MobileSidebar: FC<MobileSidebarProps> = ({
  onToggleSidebar,
  showSidebar = false,
}) => {
  return (
    <>
      <nav className="sm:hidden fixed w-full px-2 py-3 top-0 left-0 border-b flex items-center bg-white z-10">
        <button className="ml-4" onClick={onToggleSidebar}>
          <Bars />
        </button>
      </nav>
      {showSidebar && (
        <div
          className="flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30"
          onClick={onToggleSidebar}
        />
      )}
    </>
  );
};
