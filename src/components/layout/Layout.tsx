
import { SidebarProvider } from "@/components/ui/sidebar";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-agro-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1 p-4 md:p-6 overflow-auto">
            <div className="animate-fade-in">
              {children}
            </div>
          </main>
          <footer className="p-4 border-t border-agro-gray-200 text-center text-sm text-agro-gray-600 bg-white">
            © {new Date().getFullYear()} Plant Analytics - Monitoreo inteligente de cultivos con IA
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
