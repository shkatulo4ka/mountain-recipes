import { prisma } from "../utils/db";

export async function getAllIngredientsAction() {
  const data = await prisma.ingredient.findMany({
    select: {
      name: true,
      id: true,
      kkal: true,
    },
  });
  return data;
}
