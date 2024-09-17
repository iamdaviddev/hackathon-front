'use client'

import { 
  CardTitle, 
  CardHeader, 
  CardContent,
  Card 
} from "@/components/ui/card";

import { 
  TableHead, 
  TableRow, 
  TableHeader, 
  TableCell, 
  TableBody, 
  Table 
} from "@/components/ui/table";

import { useEffect, useState } from 'react'
import { Header } from "./_components/header"

import { Activity, CreditCard, DollarSign, LineChart, Users } from "lucide-react";
import { Sidebar } from "./_components/Sidebar";
import { api } from "@/lib/axios";



export default function Dashboard() {
  const [Data, setData] = useState({});
  const [users, setUsers] = useState([])


  useEffect(() => {
    api.get('/centro/1/count')
      .then(response => {
        setData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error(error);
      });

      api.get("/get-residentes/1")
      .then(response => {
        setUsers(response.data);
        console.log(response.data)
      })
  }, []);


  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <div className="flex-1 bg-gray-100 dark:bg-gray-950">
        <Header/>
        <main className="p-6 grid gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Crianças</CardTitle>
                <DollarSign className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{Data.totalCriancas}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Idosos</CardTitle>
                <Users className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{Data.totalIdosos}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+180.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Adolescentes/Jovens</CardTitle>
                <CreditCard className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{Data.totalAdolescentes}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+19% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Doações</CardTitle>
                <Activity className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{Data.totalDoacoes}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+201 since last hour</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Atividades recentes</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Invoice</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {
                      users.map((user)=>(
                        <TableRow key={user.id}>

                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell> {user.gender}</TableCell>
                        <TableCell>{user.categoriaEtaria}</TableCell>
                        <TableCell className="text-right">{user.dataNascimento}</TableCell>
                      </TableRow>
                     
                      ))
                    }
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Gráficos</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart className="aspect-[4/3]" />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
