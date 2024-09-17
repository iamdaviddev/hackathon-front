import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit, Trash2 } from 'lucide-react'

export default function CaseWorkersList() {
  const caseWorkers = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", phoneNumber: "555-1111" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", phoneNumber: "555-2222" },
    { id: 3, name: "Carol Williams", email: "carol@example.com", phoneNumber: "555-3333" },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone Number</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {caseWorkers.map((worker) => (
          <TableRow key={worker.id}>
            <TableCell>{worker.name}</TableCell>
            <TableCell>{worker.email}</TableCell>
            <TableCell>{worker.phoneNumber}</TableCell>
            <TableCell>
              <Button variant="ghost" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}