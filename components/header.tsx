'use client'

import { HandHeart, Users } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export function Header(){
  const router = useRouter()

  function handleClick(){
    router.push('/login')
  }
  
  return (
    <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <HandHeart className="size-10" />
            <span className="text-2xl font-bold">FosterCare</span>
          </div>
          <nav className="flex items-center gap-10">
            <ul className="flex space-x-4">
              <li><Link href="#features" className="hover:underline">Features</Link></li>
              <li><Link href="#about" className="hover:underline">About</Link></li>
              <li><Link href="#contact" className="hover:underline">Contact</Link></li>
            </ul>

            <button onClick={handleClick} className="flex items-center gap-1">
              <Users/>
              Login
            </button>
          </nav>
        </div>
      </header>
  )
}