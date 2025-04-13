import { prisma } from "./utils/db";

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

const Home = async () => {
  const data = await getData();
  return ( 
    <div className="py-6">
      <h1 className="text-3xl bont-bold trackin-tight mb-8">Recipes</h1>
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
 
export default Home;