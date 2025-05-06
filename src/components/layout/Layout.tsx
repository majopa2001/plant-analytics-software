
import { SidebarProvider } from "@/components/ui/sidebar";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1 p-4 md:p-6 overflow-auto">
            {children}
          </main>
          <footer className="p-4 border-t text-center text-sm text-gray-500">
            © {new Date().getFullYear()} AgroVision Perú - Transformando la agricultura con tecnología
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
