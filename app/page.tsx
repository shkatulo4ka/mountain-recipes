import { SelectWithSearch } from "@/components/index";
import { getAllIngredientsAction } from "./_actions/ingredientActions";

const Home = async () => {
  const ingredients = await getAllIngredientsAction();
  console.log(ingredients);

  return (
    <div>
      <h1>Главная страница == тест компонентов</h1>
      <h2>SelectWithSearch</h2>
      <SelectWithSearch
        options={ingredients ? ingredients.map(({ id, name }) => ({ label: name, value: id })) : []}
        title="Ингридиент"
        inputName={""}
      />
    </div>
  );
};

export default Home;
