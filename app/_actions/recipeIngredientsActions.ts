"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";

import { prisma } from "../utils/db";

const { getUser } = getKindeServerSession();

export const addIngridientAction = async (formData: FormData) => {
  const recipeID = formData.get("recipeId") as string;
  const ingredientId = "842ba14b-7d2d-4cd7-a620-2744053e1673"; // todo: id from select!
  const quantity = 30; // todo const quantity = formData.get("quantity");
  const pathName = `/recipes/${recipeID}`;

  const data = await prisma.recipe_Ingredients.create({
    data: {
      recipeID,
      ingredientId,
      quantity,
    },
  });

  console.log("ingredient added", data);

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
