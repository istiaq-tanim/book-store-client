import { Home } from "lucide-react";
import Link from "next/link";
import { SidebarRoutes } from "./SidebarRoutes";

const Sidebar = ({ user }: { user: string }) => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="flex flex-col w-full">
        <SidebarRoutes user={user} />
        <Link
          className="flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20 pt-2"
          href="/"
        >
          <Home></Home>
          <span>Home</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
