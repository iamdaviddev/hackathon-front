import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FormEvent, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { api } from "@/lib/axios"


export function Formulario() {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [gestorID, setgestorID] = useState('')
  const [contact, setContact] = useState('')


  const handleSubmit = async (event:FormEvent) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const response   = await api.post("/centro", {
        nome: name,
        endereco:  address,
        gestorId: 4,
        contact,
      });

      console.log("User added successfully:", response.data);

      // Handle successful user creation (e.g., clear form, close dialog)
      setName("");
      setAddress("");
      setgestorID("");
      setContact("");

    } catch (error) {
      console.error("Error adding user:", error);

      // Handle error (e.g., display an error message to the user)
    }
  };


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Person</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Name</Label>
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="you@example.com" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className='outline-none'
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Address</Label>
                <Input 
                  id="address" 
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  className='outline-none' 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">ID</Label>
                <Input 
                  id="gestorID" 
                  type="text"
                  value={gestorID}
                  onChange={(e) => setgestorID(e.target.value)}
                  required
                  className='outline-none' 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Contact</Label>
                <Input 
                  id="contact" 
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                  className='outline-none' 
                />
              </div>
            </div>
          </form>
        <DialogFooter>
          <Button onClick={(e)=> handleSubmit(e)}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
