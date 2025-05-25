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
    const hikingId = formData.get('hikingId')

        const newEating = await prisma.eating.create({
        data: {
            eatingTimeId: eatingTimeId as string,
            dayNumber: dayNumber,
            hikingId: hikingId as string
        },
    });

    return newEating.id;
}

export async function updateEatingAction(formData: FormData) {
    const eatingId = formData.get("eatingId ");
    const recipeId = formData.get('recipeId')

    const eating = await prisma.eating.update({
        where: {
            id: eatingId as string
        },
        data: {
            recipes: {
                connect: {
                    id: recipeId as string
                }
            }
            }
        }
    )
}