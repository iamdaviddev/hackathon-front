import { LayoutDashboard, Home, Users, LogOut, HandHeart } from "lucide-react";
import Link from "next/link";

export function Sidebar(){
  return(
    <div className="bg-gray-900 text-gray-400 w-64 p-6 border-r border-gray-800">
        <div className="flex items-center mb-6 gap-3">
          <HandHeart className="size-10 text-white" />
          <span className="text-white font-semibold text-lg">FosterCare</span>
        </div>
        <nav className="space-y-2">
          <Link className="flex items-center gap-2 hover:bg-gray-800 px-3 py-2 rounded" href="/admin">
            <LayoutDashboard />
            <span>Dashboard</span>
          </Link>
          <Link className="flex items-center gap-2 hover:bg-gray-800 px-3 py-2 rounded" href="/admin/center">
            <Home/>
            <span>Centros</span>
          </Link>
          <Link className="flex items-center gap-2 hover:bg-gray-800 px-3 py-2 rounded" href="/admin/manager">
            <Users/>
            <span>Gerentes</span>
          </Link>
          <Link className="flex items-center gap-2 hover:bg-gray-800 px-3 py-2 rounded" href="#">
            <LogOut/>
            <span>Sair</span>
          </Link>
        </nav>
      </div>
  )
}