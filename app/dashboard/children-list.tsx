import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit, Trash2 } from 'lucide-react'

export function ChildrenList() {
  const children = [
    { id: 1, name: "John Doe", age: 10, currentFamily: "Smith Family" },
    { id: 2, name: "Jane Smith", age: 8, currentFamily: "Johnson Family" },
    { id: 3, name: "Mike Brown", age: 12, currentFamily: "Williams Family" },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Current Family</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {children.map((child) => (
          <TableRow key={child.id}>
            <TableCell>{child.name}</TableCell>
            <TableCell>{child.age}</TableCell>
            <TableCell>{child.currentFamily}</TableCell>
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