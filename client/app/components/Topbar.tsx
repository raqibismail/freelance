import { useAuth } from "@/auth/AuthContext";
import { SidebarTrigger } from "./ui/sidebar";




export default function Topbar() {
    const { user, logout } = useAuth()
    if (user)
        console.log(user);

    return (
        <header className="bg-navbar text-text p-4 flex justify-between items-center inset-shadow-sm inset-shadow-navbar ">
            <SidebarTrigger className="text-foreground" />
            <div className="flex items-center gap-4">
                <span className="text-foreground">Hello, {String(user?.name).toUpperCase()} 👋</span>
                <button onClick={() => {
                    logout()
                }} className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition">
                    Logout
                </button>
            </div>
        </header>
    );
}
