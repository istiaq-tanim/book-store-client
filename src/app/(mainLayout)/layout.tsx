import Footer from "@/components/Footer";
import { MainNav } from "@/components/MainNav";
import { userInfo } from "../(withoutMainLayout)/action/authAction";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await userInfo();
  const navLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Shop",
      href: "/shop",
    },
  ];

  if (user?.role === "ADMIN" || user?.role === "USER") {
    navLinks.push({
      title: "Dashboard",
      href: `/dashboard/${user?.role.toLowerCase()}`,
    });
  }
  return (
    <div className="flex min-h-screen flex-col">
      <header className="z-40 bg-background/40 backdrop-blur-md fixed top-0 left-0 right-0 border-b ">
        <div className="container flex h-20 items-center justify-between py-6 ">
          <MainNav items={navLinks} user={user?.role} />
        </div>
      </header>
      <main className="flex-1 pt-20 flex flex-col">{children}</main>
      <Footer></Footer>
    </div>
  );
};
export default MainLayout;
