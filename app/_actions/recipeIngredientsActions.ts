"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";

import { prisma } from "../utils/db";

const { getUser } = getKindeServerSession();

export const addIngridientAction = async (formData: FormData) => {
  const recipeID = formData.get("recipeId") as string;
  const ingredientId = formData.get("ingredientId") as string;
  const quantity = Number(formData.get("quantity"));
  const pathName = `/recipes/${recipeID}`;

  const data = { recipeID, ingredientId, quantity };
  console.log("add: ", data, pathName);

  const newdata = await prisma.recipe_Ingredients.create({ data });

  console.log("ingredient added", newdata);

  revalidatePath(pathName);
};

export async function getRecipeIngredientsAction(recipeId: string) {
  const user = await getUser();
  if (!user) return;

  const data = await prisma.recipe_Ingredients.findMany({
    where: {
      recipeID: recipeId,
    },
    select: {
      ingredient: {
        select: {
          name: true,
        },
      },
      quantity: true,
    },
  });

  return data;
}
