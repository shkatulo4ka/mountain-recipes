import { FC } from "react";

import { addIngridientAction } from "@/app/_actions/recipeIngredientsActions";
import { getAllIngredientsAction } from "@/app/_actions/ingredientActions";
import { Input, Label, SelectWithSearch, SubmitButton } from "../index";

interface IAddIngridientForm {
  recipeId: string;
  userId: string;
}

const AddIngridientForm: FC<IAddIngridientForm> = async ({ recipeId, userId }) => {
  // todo
  // const data = await getIngridients(userId);
  const ingredients = await getAllIngredientsAction();
  const ingridientsForSelect = ingredients ? ingredients.map(({ id, name }) => ({ label: name, value: id })) : [];

  console.log("get user(?) ingridients", userId, recipeId);

  return (
    <form action={addIngridientAction}>
      <input type="hidden" name="recipeId" value={recipeId} />
      <input type="hidden" name="ingredientId" id="ingredientId" value={""} />
      <div className="flex flex-col gap-4 mb-4">
        <div className="flex flex-col gap-2">
          <Label>Ингридиент</Label>
          <SelectWithSearch options={ingridientsForSelect} title="ингридиент" inputName="ingredientId" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Количество грамм</Label>
          <Input name="quantity" required type="number" placeholder="Введи кол-во грамм" />
        </div>
      </div>
      <SubmitButton title="Add Ingridient to Recipe" />
    </form>
  );
};

export default AddIngridientForm;
