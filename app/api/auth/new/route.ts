import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import { prisma } from "@/app/utils/db";

// to use need add this route to KINDE_POST_LOGIN_REDIRECT_URL
export async function GET() {
  noStore();
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user || user === null || !user.id) {
    throw new Error("Something went wrong, i am sorry...");
  }

  let dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });

  if (dbUser) {
    console.log(`User ${dbUser} already in the base!`);
  } else {
    const newUser = {
      email: user.email ?? "",
      name: user.given_name ?? "",
      id: user.id,
      profileImage: user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
    };
    console.log("Create new user:", newUser);
    dbUser = await prisma.user.create({ data: newUser });
  }

  return redirect("/");
}
