import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function DocumentsPage() {
    return      <Table>
            <TableCaption>Liste des documents importés</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">Nom du document</TableHead>
                <TableHead>Extension du fichier</TableHead>
                <TableHead>Nom du document</TableHead>
                <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
            </TableBody>
            </Table>

}
