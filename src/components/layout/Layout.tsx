import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import MobileActionBar from "@/components/ui/MobileActionBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pb-20 lg:pb-0">{children}</main>
      <Footer />
      <WhatsAppButton />
      <MobileActionBar />
    </div>
  );
};

export default Layout;
