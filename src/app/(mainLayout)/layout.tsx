import Footer from "@/components/Footer";
import { MainNav } from "@/components/MainNav";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Shop",
    href: "/shop",
  },
  {
    title: "About Us",
    href: "/about",
  },
];
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="z-40 bg-background/40 backdrop-blur-md fixed top-0 left-0 right-0 border-b ">
        <div className="container flex h-20 items-center justify-between py-6 ">
          <MainNav items={navLinks} />
        </div>
      </header>
      <main className="flex-1 pt-20 flex flex-col">{children}</main>
      <Footer></Footer>
    </div>
  );
};
export default MainLayout;
