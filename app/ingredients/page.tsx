import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { prisma } from "../utils/db"
import { redirect } from "next/navigation";

const Ingredients = async() => {
  const {getUser} = getKindeServerSession();

  const user = await getUser();

  if (!user) {
    return redirect('/api/auth/register')
  }

  const data = await prisma.ingredient.findMany({
    select: {
      name: true,
      kkal: true,
      price:true
    }
  })
  return (
    <div>
      <div>IngredientsPage</div>
      <div>{data.map(item => (
        <h1>{item.name}</h1>
      ))}
      </div>
    </div>
  )
}

export default Ingredients