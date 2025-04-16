import { updateRecipeAction } from '@/app/_actions/recipeActions'
import SelectCategory from '@/components/general/SelectCategory'
import SubmitButton from '@/components/general/SubmitButton'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@radix-ui/react-select'

const EditRecipe = () => {
  return (
    <div className="m-2">
            <Card className="max-w-lg mx-auto">
                <CardHeader>
                    <CardTitle>Изменить рецепт</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-2" action={updateRecipeAction}>
                        <div className="flex flex-col gap-2">
                            <Label>Название</Label>
                            <Input name="name" required type="text" placeholder="Введи название"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Категория</Label>
                            <SelectCategory/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Приготовление</Label>
                            <Textarea name='description'/>
                        </div>


                        <SubmitButton/>
                    </form>
                </CardContent>
            </Card>
        </div>
  )
}

export default EditRecipe