import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { getCategoryAction } from '@/app/_actions/recipeActions';

const SelectCategory = async () => {

  const categories = await getCategoryAction();
  return (
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
  )
}

export default SelectCategory