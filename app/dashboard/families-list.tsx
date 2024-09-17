import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit, Trash2 } from 'lucide-react'

export default function FamiliesList() {
  const families = [
    { id: 1, name: "Smith Family", address: "123 Main St", phoneNumber: "555-1234" },
    { id: 2, name: "Johnson Family", address: "456 Elm St", phoneNumber: "555-5678" },
    { id: 3, name: "Williams Family", address: "789 Oak St", phoneNumber: "555-9012" },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Phone Number</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {families.map((family) => (
          <TableRow key={family.id}>
            <TableCell>{family.name}</TableCell>
            <TableCell>{family.address}</TableCell>
            <TableCell>{family.phoneNumber}</TableCell>
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