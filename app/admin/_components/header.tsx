import { AvatarUser } from "@/components/Profile";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Formulario } from "./formulario";


export function Header(){
  const [searchTerm, setSearchTerm] = useState("")
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return(
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search carers..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10 w-64"
          />

      </div>
      <div className="flex items-center gap-4">
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