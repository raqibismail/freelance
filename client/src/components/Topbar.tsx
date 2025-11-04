import { ModeToggle } from "./ToggleDarkButton";
import { SidebarTrigger } from "./ui/sidebar";


export default function Topbar() {
    return (
        <header className="bg-navbar text-text p-4 flex justify-between items-center inset-shadow-sm inset-shadow-navbar ">
            <SidebarTrigger className="text-foreground"  />
            <div className="flex items-center gap-4">
                <span className="text-foreground">Hello, Qibu 👋</span>
                <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition">
                    Logout
                </button>
            </div>
        </header>
    );
}
