import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { FC } from "react";

import AddIngridientDialog from "@/components/dialogs/AddIngridientDialog";
import { notFound } from "next/navigation";
import { getHikingAction } from "@/app/_actions/hikingActions";

interface IDetailPage {
  params: Promise<{ id: string }>;
}

const DetailHikingPage: FC<IDetailPage> = async ({ params }) => {
  const { id } = await params;
  const data = await getHikingAction(id);
  if (!data) {
    return notFound();
  }

  console.log(data);

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div>
      <h1 className="text-2xl text-gray-900 items-center font-semibold m-4">{data?.name}</h1>
      
    </div>
  );
};

export default DetailHikingPage;