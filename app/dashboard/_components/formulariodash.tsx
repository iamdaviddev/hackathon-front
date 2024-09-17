'use client'

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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export function Formulario() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [responsavel, setResponsavel] = useState('')
  const [nascimento, setNascimento] = useState('')


  const handleSubmit = async (event:FormEvent) => {
    event.preventDefault();

    try {
      const response = await api.post("/criar-residentes", {
        name: "Nelson Abreu",
        age: 10,
       gender: "Masculino",
       categoriaEtaria: "crianças",
       responsavelId: 7,
       centroId: 1,
      });

      console.log("User added successfully:", response.data);
      
      setName("");
      setAge("");
      setResponsavel("");
      setNascimento("");

    } catch (error) {
      console.error("Error adding user:", error);
    }
  };


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Residente</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
          <form onSubmit={handleSubmit} className="">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="John Doe" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className='outline-none'
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Age</Label>
                <Input 
                  id="age" 
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                  className='outline-none' 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Responsavel</Label>
                <Input 
                  id="responsavel" 
                  type="text"
                  value={responsavel}
                  onChange={(e) => setResponsavel(e.target.value)}
                  required
                  className='outline-none' 
                />
              </div>
              <div className="space-y-2">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sexo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="masculino">Masculino</SelectItem>
                    <SelectItem value="feminino">Femenino</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Nascimento</Label>
                <Input 
                  id="gestorID" 
                  type="date"
                  value={nascimento}
                  onChange={(e) => setNascimento(e.target.value)}
                  required
                  className='outline-none' 
                />
              </div>
              <div className="space-y-2">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Categoria Etaria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="idoso">Idoso</SelectItem>
                    <SelectItem value="jovem">Jovem</SelectItem>
                    <SelectItem value="criança">Criança</SelectItem>
                  </SelectContent>
                </Select>
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
