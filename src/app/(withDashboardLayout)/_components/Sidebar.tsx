import { userInfo } from "@/app/(withoutMainLayout)/action/authAction";
import { SidebarRoutes } from "./SidebarRoutes";

const Sidebar = async () => {
  const user = await userInfo();
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="flex flex-col w-full">
        <SidebarRoutes user={user?.role} />
      </div>
    </div>
  );
};

export default Sidebar;
