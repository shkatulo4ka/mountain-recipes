import { prisma } from "../utils/db"

const Ingredients = async() => {


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