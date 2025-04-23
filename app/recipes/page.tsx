import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import RecipeCard from "@/components/general/RecipeCard";
import { getAllRecipesAction } from "../_actions/recipeActions";
import { Suspense } from "react";

const Recipes = () => {
  return (
    <div className="py-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-semibold trackin-tight mb-8">Рецепты</h1>
        <Link className={buttonVariants()} href="/recipes/create">
          Create Recipe
        </Link>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <AllRecipes/>
      </Suspense>
    </div>
  );
};


async function AllRecipes() {
  const data = await getAllRecipesAction();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grod-cols-3 gap-4">
        {data.map((item) => (
          <div key={item.id}>
            <RecipeCard data={item} key={item.id} />
          </div>
        ))}
      </div>
  )
}

export default Recipes;
