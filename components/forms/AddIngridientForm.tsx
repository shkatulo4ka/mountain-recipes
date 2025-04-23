import { FC } from "react";

import { SubmitButton } from "../Buttons";
import { addIngridientAction } from "@/app/_actions/recipeIngredientsActions";
import IngredientCombobox from "../general/IngredientCombobox";

interface IAddIngridientForm {
  recipeId: string;
  userId: string;
}

const AddIngridientForm: FC<IAddIngridientForm> = async ({ recipeId, userId }) => {
  // todo
  // const data = await getIngridients(userId);
  console.log("get user(?) ingridients", userId, recipeId);

  return (
    <form action={addIngridientAction}>
      <input type="hidden" name="recipeId" value={recipeId} />
      <IngredientCombobox />
      <SubmitButton title="Add Ingridient to Recipe" />
    </form>
  );
};

export default AddIngridientForm;
