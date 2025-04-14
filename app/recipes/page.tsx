import Link from "next/link";
import { prisma } from "../utils/db";
import { buttonVariants } from "@/components/ui/button";

async function getData() {
  const data = await prisma.recipe.findMany({
    select: {
      name: true,
      kkal:true,
      description: true,
      id: true,
      ingredients: {
        select: {
          ingredient: {
            select: {
              name: true
            }
          },
          quantity: true
        }
      }
    }
  })
  return data;
}

const Recipes = async () => {
  const data = await getData();
  return ( 
    <div className="py-6">
        <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-medium trackin-tight mb-8">Recipes</h1>
            <Link className={buttonVariants()} href="/recipes/create">
                Create Recipe
            </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grod-cols-3 gap-4">
            {data.map((item) => (
            <h1 key={item.name}>
                {item.name}: {(item.ingredients.map (i => `${i.ingredient.name} - ${i.quantity}г`)).join(', ')}
            </h1>
            ))}
        </div>
    </div>
    );
}
 
export default Recipes;