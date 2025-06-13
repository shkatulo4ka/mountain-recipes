"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "../utils/db";
import { redirect } from "next/navigation";

const { getUser } = getKindeServerSession();

export async function createEatingAction(formData: FormData) {
  const user = await getUser();
  if (!user) return redirect("/api/auth/register");

  const eatingTimeId = formData.get("eatingTimeId ");
  const dayNumber = Number(formData.get("dayNumber"));
  const hikingId = formData.get("hikingId");

  const newEating = await prisma.eating.create({
    data: {
      eatingTimeId: eatingTimeId as string,
      dayNumber: dayNumber,
      hikingId: hikingId as string,
    },
  });

  return newEating.id;
}

export async function updateEatingAction(formData: FormData) {
  const eatingId = formData.get("eatingId ");
  const recipeId = formData.get("recipeId");

  await prisma.eating.update({
    where: {
      id: eatingId as string,
    },
    data: {
      recipes: {
        connect: {
          id: recipeId as string,
        },
      },
    },
  });
}

export async function deleteEatingAction(eatingId: string) {
  await prisma.eating.delete({
    where: {
      id: eatingId as string,
    },
  });
}

export async function getHikingEatingsAction(hikindId: string) {
  const eatings = await prisma.eating.findMany({
    where: {
      hikingId: hikindId,
    },
    select: {
      id: true,
      hikingId: true,
      dayNumber: true,
      eatingTimeId: true,
      recipes: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  return eatings;
}
