import { AvatarUser } from "@/components/Profile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { Formulario } from "@/app/dashboard/_components/formulariodash";


export function Header(){
  
  return(
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button className="rounded-full" size="icon" variant="ghost">
          <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </Button>
        <Input
          className="bg-gray-100 dark:bg-gray-800 border-none focus:ring-0 text-sm"
          placeholder="Search..."
          type="search"
        />
      </div>
      <div className="flex gap-3">
        <div className="flex items-center gap-4">
          <AvatarUser/>
        </div>
        <div>
          <Formulario/>
        </div>
      </div>
    </header>

  )
}