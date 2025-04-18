// components/Navbar.tsx
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Header() {
    return (
        <header className="w-full px-4 py-3 shadow-md bg-headerViolet flex justify-between items-center top-0 z-50">
            <div className="text-xl font-bold text-white">Amine Noura</div>

            {/* Menu desktop */}
            <nav className="hidden md:flex gap-6">
                <a href="#description" className="text-white font-bold hover:text-black">Description</a>
                <a href="#service" className="text-white font-bold hover:text-black">Services</a>
                <a href="#project" className="text-white font-bold hover:text-black">Projets</a>
                <a href="#skill" className="text-white font-bold hover:text-black">Compétences</a>
                <a href="#contact" className="text-white font-bold hover:text-black">Me contacter</a>
            </nav>

            {/* Menu mobile */}
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger className="p-2">
                        <Menu className="h-6 w-6 text-white" />
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-violet-950 w-3/4 p-6">
                        <nav className="flex flex-col gap-4 mt-6">
                            <a href="#description" className="text-white font-bold hover:text-black">Description</a>
                            <a href="#service" className="text-white font-bold hover:text-black">Services</a>
                            <a href="#project" className="text-white font-bold hover:text-black">Projets</a>
                            <a href="#skill" className="text-white font-bold hover:text-black">Compétences</a>
                            <a href="#contact" className="text-white font-bold hover:text-black">Me contacter</a>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
