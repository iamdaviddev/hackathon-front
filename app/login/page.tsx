'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'
import { api } from '@/lib/axios'
import { ToastContainer, toast } from "react-toastify";


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [loading ,setloading] = useState(false)

  const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault()
    setloading(true)
    if(email && password !== " "){
     const res = await api.post( '/login',{
         email,
         password
      })
      console.log('Login submitted', { email, password, rememberMe }, res.data.userlogin)
      if(res.data.userlogin.perfil === 'admin'){
        console.log('Login submitted', { email, password, rememberMe }, res.data.userlogin)
        toast.success("Usuário cadastrado com sucesso!", {
          autoClose: 3000,
        })

        localStorage.setItem("userlogin", JSON.stringify(res.data.userlogin))
        window.location.href="/admin"

      }else if(res.data.userlogin.perfil === 'usuario-R'){
        window.location.href="/usuario"
        localStorage.setItem("userlogin", JSON.stringify(res.data.userlogin))
        toast.success("Usuário cadastrado com sucesso!", {
          autoClose: 3000,
        })
      }else{
        window.location.href="/dashboard"

        localStorage.setItem("userlogin", JSON.stringify(res.data.userlogin))
        toast.success("Usuário cadastrado com sucesso!", {
          autoClose: 3000,
        })
      }
    }else{
      toast.error("Usuário ou senha incorreta!")
      console.log(error.response.data.message);
    }
   
    setloading(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md">
          <CardHeader>
            <h2 className="text-2xl font-bold text-center">FosterCare</h2>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="you@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='outline-none'
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className='outline-none' 
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="remember" 
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  />
                  <Label htmlFor="remember" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Remember me
                  </Label>
                </div>
              </div>
              <Button type="submit" className="w-full mt-6">
                { !loading ? "Log in": "logando..."}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/forgot-password" className="text-sm text-primary hover:underline">
              Forgot password?
            </Link>
          </CardFooter>
        </Card>
      </main>
      <ToastContainer/>
    </div>
  )
}