import { createRecipeAction } from "@/app/_actions/recipeActions";
import SelectCategory from "@/components/general/SelectCategory";
import SubmitButton from "@/components/general/SubmitButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function CreateRecipe() {
  return (
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
              <Input name="name" required type="text" placeholder="Введи название" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Категория</Label>
              <SelectCategory />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
