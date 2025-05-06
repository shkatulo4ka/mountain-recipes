import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { FC } from "react";

import { getRecipeAction } from "@/app/_actions/recipeActions";
import AddIngridientDialog from "@/components/dialogs/AddIngridientDialog";
import { notFound } from "next/navigation";

interface IDetailPage {
  params: Promise<{ id: string }>;
}

const DetailPage: FC<IDetailPage> = async ({ params }) => {
  const { id } = await params;
  const data = await getRecipeAction(id);
  if (!data) {
    return notFound();
  }

  console.log(data);

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const isOwner = user?.id; // todo: add user check

  return (
    <div>
      <h1 className="text-2xl text-gray-900 items-center font-semibold m-4">{data?.name}</h1>
      <p>{data?.description}</p>
      <h2>Ingridients</h2>
      <ul className="list-disc mx-5">
        {data?.ingredients.map((item) => <li key={item.id}>{`${item.ingredient.name} - ${item.quantity} грамм`}</li>)}
      </ul>
      {isOwner ? <AddIngridientDialog userId={user?.id} recipeId={id} /> : null}
    </div>
  );
};

export default DetailPage;
