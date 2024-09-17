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


import { Header } from "./_components/header"

import { Home, LineChart, UserRoundCog, Users } from "lucide-react";
import { Sidebar } from "./_components/SideBar";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";



export default function Admin() {
  const [data, setData] = useState({})

  useEffect(() => {
    api.get('/centro/1/count')
      .then(response => {
        setData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error(error);
  });
  },[])

  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <div className="flex-1 bg-gray-100 dark:bg-gray-950">
        <Header/>
        <main className="p-6 grid gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Centros</CardTitle>
                <Home className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Gerentes</CardTitle>
                <UserRoundCog className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total de Cadastrados</CardTitle>
                <Users className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                {}
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
                    {}
                    <TableRow>
                      <TableCell className="font-medium">INV002</TableCell>
                      <TableCell>Pending</TableCell>
                      <TableCell>$150.00</TableCell>
                      <TableCell className="text-right">PayPal</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">INV003</TableCell>
                      <TableCell>Unpaid</TableCell>
                      <TableCell>$350.00</TableCell>
                      <TableCell className="text-right">Bank Transfer</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">INV004</TableCell>
                      <TableCell>Paid</TableCell>
                      <TableCell>$450.00</TableCell>
                      <TableCell className="text-right">Credit Card</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">INV005</TableCell>
                      <TableCell>Paid</TableCell>
                      <TableCell>$550.00</TableCell>
                      <TableCell className="text-right">PayPal</TableCell>
                    </TableRow>
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
