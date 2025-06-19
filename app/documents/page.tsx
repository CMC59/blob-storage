import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pencil, Trash2, Eye, FileDown } from 'lucide-react';
import styles from './documents.module.scss';
import {
  Table,
  TableBody, 
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Uploader from "../upload/page";
// import { put } from "@vercel/blob";
import { list } from '@vercel/blob';

// const { url } = await put('articles/blob.txt', 'Hello World!', { access: 'public' });
export default async function DocumentsPage() {
     const response = await list();
    return  (
        <>
            <div className="w-full max-w-6xl p-7 bg-white rounded shadow">
                <Table>
                    <TableCaption className={styles.caption}>Liste des documents importés</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className={styles.tablehead}>Date import du document</TableHead>
                            <TableHead className={styles.tablehead}>Extension du fichier</TableHead>
                            <TableHead className={styles.tablehead}>Nom du document</TableHead>
                            <TableHead className={styles.tablehead}>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {response.blobs.map((blob) => (
                            <TableRow key={blob.pathname}>
                            <TableCell className="font-medium"></TableCell>
                            <TableCell>{blob.pathname.split('.').pop()}</TableCell>
                            <TableCell>{blob.pathname}</TableCell>
                            <TableCell className="text-left">
                                <Button variant="outline"><Trash2 color="black" size={64} /></Button>
                                <a href={blob.downloadUrl} download>
                                <Button variant="outline">
                                    <FileDown color="black" size={32} />
                                </Button>
                                </a>                            
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                </Table>
                <p>ko</p>
            </div>
            <div className="grid w-full max-w-sm items-center gap-3 p-6">
                <Label htmlFor="picture">Picture</Label>
                <Input id="picture" type="file" />
            </div>
        </>
    );    
}
