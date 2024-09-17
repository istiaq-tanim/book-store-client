import { userInfo } from "../(withoutMainLayout)/action/authAction";
import { Navbar } from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await userInfo();
  return (
    <div className="h-full">
      <div className="h-[80px] lg:pl-56 fixed inset-y-0 w-full z-50">
        <Navbar email={user?.email}></Navbar>
      </div>
      <div className="hidden lg:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar user={user?.role}></Sidebar>
      </div>
      <main className="lg:pl-56 pt-[80px] h-full">{children}</main>
    </div>
  );
};
export default DashboardLayout;
