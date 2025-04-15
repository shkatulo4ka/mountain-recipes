import { createRecipeAction, getCategoryAction } from "@/app/_actions/recipeActions";
import { prisma } from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue  } from "@/components/ui/select";


export default async function CreateRecipe() {
    const categories = await getCategoryAction();

    return(
        <div className="m-2">
            <Card className="max-w-lg mx-auto">
                <CardHeader>
                    <CardTitle>Create Recipe</CardTitle>
                    <CardDescription>Create your own recipe</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-2" action={createRecipeAction}>
                        <div className="flex flex-col gap-2">
                            <Label>Название</Label>
                            <Input name="name" required type="text" placeholder="Введи название"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Категория</Label>
                            <Select name="categoryId">
                                <SelectTrigger>
                                    <SelectValue placeholder="Выбери категорию"/>
                                </SelectTrigger>
                                <SelectContent>
                                    {categories.map(({name, id}) => (
                                        <SelectItem key={id} value={id}>
                                            {name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <Button>Создать</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}