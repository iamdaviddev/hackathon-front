import {  
  LayoutDashboard, 
  Home, 
  Users, 
  Settings, 
  LogOut, 
  HandHeart
} from "lucide-react";

import Link from "next/link";

export function Sidebar(){
  return(
    <div className="bg-gray-900 text-gray-400 w-64 p-6 border-r border-gray-800">
        <div className="flex items-center mb-6 gap-3">
          <HandHeart className="size-10 text-white" />
          <span className="text-white font-semibold text-lg">FosterCare</span>
        </div>
        <nav className="space-y-2">
          <Link className="flex items-center gap-2 hover:bg-gray-800 px-3 py-2 rounded" href="/dashboard">
            <LayoutDashboard />
            <span>Dashboard</span>
          </Link>
          <Link className="flex items-center gap-2 hover:bg-gray-800 px-3 py-2 rounded" href="/children-list  ">
            <Home/>
            <span>Crianças</span>
          </Link>
          <Link className="flex items-center gap-2 hover:bg-gray-800 px-3 py-2 rounded" href="/dashboard/user">
            <Users/>
            <span>Idosos</span>
          </Link>
          <Link className="flex items-center gap-2 hover:bg-gray-800 px-3 py-2 rounded" href="#">
            <Settings />
            <span>Doações</span>
          </Link>
          <Link className="flex items-center gap-2 hover:bg-gray-800 px-3 py-2 rounded" href="/login" onClick={()=> localStorage.removeItem("userlogin")}>
            <LogOut/>
            <span>Sair</span>
          </Link>
        </nav>
      </div>
  )
}