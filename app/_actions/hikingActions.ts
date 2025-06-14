"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "../utils/db";
import { redirect } from "next/navigation";

const { getUser } = getKindeServerSession();

export async function getAllHikingsAction() {
  const user = await getUser();
  if (!user) return redirect("/api/auth/register");

  const allHikings = await prisma.hiking.findMany({
    // where: { userId: user.id }, // todo: вернуть, когда пользователи начнут появляться!
    select: {
      id: true,
      name: true,
    },
  });

  return allHikings;
}

export async function getHikingAction(id: string) {
  const user = await getUser();
  if (!user) return redirect("/api/auth/register");

  const hiking = await prisma.hiking.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      daysTotal: true,
      membersTotal: true,
    },
  });

  return hiking;
}

export async function createHikingAction(formData: FormData) {
  const user = await getUser();
  if (!user) return redirect("/api/auth/register");

  const name = formData.get("name");
  const daysTotal = Number(formData.get("daysTotal"));
  const membersTotal = Number(formData.get("membersTotal"));

  const newHiking = await prisma.hiking.create({
    data: {
      name: name as string,
      daysTotal: daysTotal,
      userId: user.id,
      membersTotal: membersTotal,
    },
  });

  return redirect(`/hiking/${newHiking.id}`);
}

export async function deleteHikingAction(hikingID: string) {
  const user = await getUser();
  if (!user) return redirect("/api/auth/register");

  await prisma.hiking.delete({
    where: {
      id: hikingID,
    },
  });
}

export async function updateHikingAction(formData: FormData) {
  const user = await getUser();
  if (!user) return redirect("/api/auth/register");

  const hikingId = formData.get("hikindId");
  const name = formData.get("name");
  const daysTotal = Number(formData.get("daysTotal"));
  const membersTotal = Number(formData.get("membersTotal"));

  await prisma.hiking.update({
    where: {
      id: hikingId as string,
    },
    data: {
      name: name as string,
      daysTotal: daysTotal,
      membersTotal: membersTotal,
    },
  });
}
