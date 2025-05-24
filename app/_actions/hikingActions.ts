"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "../utils/db";
import { redirect } from "next/navigation";

const { getUser } = getKindeServerSession();


export async function createHiking(formData: FormData) {
    const user = await getUser();
    if (!user) return redirect("/api/auth/register");

    const name = formData.get("name");
    const daysTotal = Number(formData.get("daysTotal"));

    const newHiking = await prisma.hiking.create({
        data: {
            name: name as string,
            daysTotal: daysTotal,
            userId: user.id,
        },
    });

    return redirect(`/hiking/${newHiking.id}`)
}

export async function deleteHikingAction(hikingID:string) {
    const user = await getUser();
    if (!user) return redirect("/api/auth/register");
    
    await prisma.hiking.delete({
        where:{
            id: hikingID
        }
    })
}