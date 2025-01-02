import { SidebarProvider } from "@/components/ui/sidebar"
import AdminSidebar from "./_components/admin-sidebar"
import { ReactNode } from "react";
import TopBar from "./_components/top-bar";

interface AdminLayoutProps {
    children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    return (
        <div className="flex max-w-screen p-3 lg:p-0">
            <SidebarProvider>
                <AdminSidebar />
                <main className="w-full mr-3 h-screen">
                    <TopBar />
                    {children}
                </main>
            </SidebarProvider>
        </div>
    )
}

export default AdminLayout