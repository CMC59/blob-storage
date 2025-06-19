import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pencil, Trash2, Eye } from 'lucide-react';
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
            <div>
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
                        <TableRow>
                            <TableCell className="font-medium"></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell className="text-left">
                                <Button variant="outline"><Eye color="black" size={48} /></Button>
                                <Button variant="outline"><Pencil color="black" size={64} /></Button>
                                <Button variant="outline"><Trash2 color="black" size={64} /></Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="picture">Picture</Label>
                <Input id="picture" type="file" />
            </div>
            <div className={`flex justify-center ${styles.uploader}`}>
                <Uploader />
            </div>
            <div>
                {response.blobs.map((blob) => (
                    <a key={blob.pathname} href={blob.downloadUrl}>
                    {blob.pathname}
                    </a>
                ))}
            </div>
        </>
    );    
}
