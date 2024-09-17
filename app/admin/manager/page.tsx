'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Plus, Edit, Trash2 } from "lucide-react"
import { Sidebar } from "../_components/SideBar"
import { Header } from "../_components/header"




const mockCarers = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "098-765-4321", status: "Inactive" },
]

export default function Gerentes() {
  const [carers, setCarers] = useState(mockCarers)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [newCarer, setNewCarer] = useState({ name: "", email: "", phone: "", status: "Active" })


  const handleAddCarer = () => {
    setCarers([...carers, { ...newCarer, id: carers.length + 1 }])
    setNewCarer({ name: "", email: "", phone: "", status: "Active" })
    setIsAddModalOpen(false)
  }


  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <div className="flex-1 bg-gray-100 dark:bg-gray-950">
        <Header/>
        <main className="p-6 grid gap-6">
          <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add New Carer
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Foster Carer</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={newCarer.name}
                    onChange={(e) => setNewCarer({ ...newCarer, name: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={newCarer.email}
                    onChange={(e) => setNewCarer({ ...newCarer, email: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phone" className="text-right">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    value={newCarer.phone}
                    onChange={(e) => setNewCarer({ ...newCarer, phone: e.target.value })}
                    className="col-span-3"
                  />
                </div>
              </div>
              <Button onClick={handleAddCarer}>Add Carer</Button>
            </DialogContent>
          </Dialog>

          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                
                <TableRow>
                  <TableCell>carer.name</TableCell>
                  <TableCell>carer.email</TableCell>
                  <TableCell>carer.phone</TableCell>
                  <TableCell>carer.status</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  )
}