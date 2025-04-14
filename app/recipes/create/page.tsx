import { prisma } from "@/app/utils/db";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue  } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";


export default async function CreateRecipe() {
    const categories = await prisma.category.findMany({
        select:{
            name: true,
            id: true
        }
    });
    console.log(categories)

    return(
        <div className="m-2">
            <Card>
                <CardHeader>
                    <CardTitle>Create Recipe</CardTitle>
                    <CardDescription>Create your own recipe</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            <Label>Название</Label>
                            <Input />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Категория</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Выбери категорию"/>
                                </SelectTrigger>
                                <SelectContent>
                                    {categories.map(({id, name}) => (
                                        <SelectItem key={id} value={name}>
                                            {name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Приготовление</Label>
                            <Textarea />
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}