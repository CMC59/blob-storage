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
import { put } from "@vercel/blob";
import { list } from '@vercel/blob';
import { revalidatePath } from 'next/cache';
import { del } from '@vercel/blob';

// const { url } = await put('articles/blob.txt', 'Hello World!', { access: 'public' });
export default async function DocumentsPage() {
    const response = await list();
    async function uploadImage(formData: FormData) {
        'use server';
        const imageFile = formData.get('file') as File;
        const blob = await put(imageFile.name, imageFile, {
            access: 'public',
            addRandomSuffix: true,
        });
        revalidatePath('/');
        return blob;
    }
    async function deleteDocument(formData: FormData) {
        'use server';
        const urlToDelete = formData.get('url') as string;
        
        if (!urlToDelete) {
            throw new Error('No URL provided');
        }
        
        await del(urlToDelete);
        revalidatePath('/documents');
    }
    return  (
        <>
            <div className="w-full max-w-8xl p-7 bg-white rounded shadow">
                <Table className="table-auto">
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
                                <TableCell className="font-medium">{blob.uploadedAt ? new Date(blob.uploadedAt
                                    ).toLocaleString()
                                : "-"}</TableCell>
                                <TableCell>{blob.pathname.split('.').pop()}</TableCell>
                                <TableCell>{blob.pathname}</TableCell>
                                <TableCell className="flex items-center gap-2">
                                    <form action={deleteDocument}>
                                        <input type="hidden" name="url" value={blob.url} />
                                        <Button className="hover:border-red-400" variant="outline" type="submit">
                                            <Trash2 color="black" size={16}/>
                                        </Button>
                                    </form>
                                    <a href={blob.downloadUrl} download>
                                        <Button className="hover:border-green-400" variant="outline">
                                            <FileDown color="black" size={32} />
                                        </Button>
                                    </a>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                </Table>
            </div>
            <div className="grid w-full max-w-sm items-center gap-3 p-6">
                <form action={uploadImage} className="grid w-full max-w-sm items-center gap-3 p-6">
                <Label htmlFor="file">Fichier</Label>
                <Input
                id="file"
                name="file"
                type="file"
                required
                />
                <Button type="submit">Upload</Button>
            </form>
            </div>
        </>
    );    
}
