"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "../utils/db";

const { getUser } = getKindeServerSession();

export async function createRecipeIngredientAction(formData: FormData, recipeId: string) {
  const user = await getUser();
  if (!user) return;

  const ingredientId = formData.get("ingredientId");
  const quantity = formData.get("quantity");

  const data = await prisma.recipe_Ingredients.create({
    data: {
      recipeID: recipeId as string,
      ingredientId: ingredientId as string,
      quantity: Number(quantity),
    },
  });

  return;
}
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
