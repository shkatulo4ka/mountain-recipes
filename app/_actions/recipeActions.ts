'use server';

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "../utils/db";
import { redirect } from "next/navigation";

export async function createRecipeAction(formData: FormData) {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    if (!user) return;

    const name = formData.get('name');
    const categoryId = formData.get('categoryId');

    const data = await prisma.recipe.create({
        data: {
            name: name as string,
            categoryID: categoryId as string,
            userId: user.id
        }
    })

    return redirect("/recipes/edit")
}

export async function getCategoryAction() {
    const data = await prisma.category.findMany({
        select:{
            name: true,
            id: true
        }
    });
    return data;
}