import { 
  DropdownMenuTrigger, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuContent, 
  DropdownMenu 
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button"
import { AvatarImage, Avatar } from "@/components/ui/avatar";

import { LogOut, Settings, User } from "lucide-react";
import { useState } from "react";

export function AvatarUser(){

  const getItem: any = localStorage.getItem('userlogin')
  const [data, setdata] = useState( JSON.parse(getItem))
 
  console.log(data, getItem);
  
  return(
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-full" size="icon" variant="ghost">
          <div className="relative right-[4.2rem]">
            <div className="flex items-center gap-4">
              <div className="text-sm font-medium">{data?.name}</div>
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  )
}