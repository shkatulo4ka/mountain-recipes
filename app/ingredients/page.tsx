import { getAllIngredientsAction } from "../_actions/ingredientActions";

const Ingredients = async () => {
  const data = await getAllIngredientsAction();
  console.log(data);

  return (
    <div>
      <div>IngredientsPage</div>
      <div>
        {data.map((item) => (
          <h1 key={item.id}>
            {item.name} ({item.id})
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Ingredients;
