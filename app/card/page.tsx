import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Download, Eye, Clock } from 'lucide-react';

export default function CardDemo() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Title</CardTitle>
        <CardDescription>
          Description
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row gap-4">
        <p>Taille fichier</p>
        <Clock />
        <p>Date</p>
      </CardContent>
      <CardFooter className="flex-row gap-2">
        <Button variant="outline" className="w-5/6">
          <Eye /> Consulter
        </Button>
        <Button variant="outline" className="w-1/6">
          <Download color="black" size={48} />
        </Button>
      </CardFooter>
    </Card>
    </div>
  )
}
