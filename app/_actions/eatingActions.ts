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

export async function updateEatingAction(eatingId: string, recipeId:string) {
    prisma.eating_to_Recipe.create({
        data: {
            recipeId,
            eatingId
            }
        }
    )
}