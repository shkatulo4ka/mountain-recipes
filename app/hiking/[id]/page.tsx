import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { FC } from "react";

import { notFound } from "next/navigation";
import { getHikingAction } from "@/app/_actions/hikingActions";
import DaysTabs from "@/components/general/DaysTabs";
import { getHikingEatingsAction } from "@/app/_actions/eatingActions";

interface IDetailPage {
  params: Promise<{ id: string }>;
}

const DetailHikingPage: FC<IDetailPage> = async ({ params }) => {
  const { id } = await params;
  const hiking = await getHikingAction(id);
  if (!hiking) {
    return notFound();
  }

  const eatingData = await getHikingEatingsAction(id);

  console.log(eatingData);

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div>
      <h1 className="text-2xl text-gray-900 items-center font-semibold m-4">{hiking?.name}</h1>
      <DaysTabs daysTotal={hiking.daysTotal} data={eatingData}/> 
    </div>
  );
};

export default DetailHikingPage;