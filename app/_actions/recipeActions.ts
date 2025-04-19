"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "../utils/db";
import { redirect } from "next/navigation";

const { getUser } = getKindeServerSession();

export async function createRecipeAction(formData: FormData) {
  const user = await getUser();
  if (!user) return redirect("/api/auth/register");

  const name = formData.get("name");
  const categoryId = formData.get("categoryId");

  await prisma.recipe.create({
    data: {
      name: name as string,
      categoryID: categoryId as string,
      userId: user.id,
    },
  });

  return redirect("/recipes/edit");
}

export async function getAllRecipesAction() {
  const data = await prisma.recipe.findMany({
    select: {
      name: true,
      kkal: true,
      description: true,
      id: true,
      createdAt: true,
      ingredients: {
        select: {
          ingredient: {
            select: {
              id: true,
              name: true,
            },
          },
          quantity: true,
        },
      },
    },
  });
  return data;
}

export async function getRecipeAction(recipeId: string) {
  const user = await getUser();
  if (!user) return redirect("/api/auth/register");

  const data = await prisma.recipe.findUnique({
    where: {
      id: recipeId,
    },
    select: {
      name: true,
      kkal: true,
      description: true,
      id: true,
      createdAt: true,
      ingredients: {
        select: {
          ingredient: {
            select: {
              id: true,
              name: true,
            },
          },
          quantity: true,
        },
      },
    },
  });
  return data;
}

export async function updateRecipeAction(formData: FormData, recipeId: string) {
  const user = await getUser();
  if (!user) return redirect("/api/auth/register");

  const name = formData.get("name");
  const categoryId = formData.get("categoryId");
  const description = formData.get("description");

  const data = await prisma.recipe.update({
    where: {
      id: recipeId,
    },
    data: {
      name: name as string,
      categoryID: categoryId as string,
      description: description as string,
    },
  });

  return redirect("/recipes/edit");
}

export async function getCategoryAction() {
  const data = await prisma.category.findMany({
    select: {
      name: true,
      id: true,
    },
  });
  return data;
}
