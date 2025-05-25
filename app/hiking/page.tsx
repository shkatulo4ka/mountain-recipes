import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Suspense } from "react";
import { getAllHikingsAction } from "../_actions/hikingActions";

const Hikings = () => {
  return (
    <div className="py-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-semibold trackin-tight mb-8">Мои походы</h1>
        <Link className={buttonVariants()} href="/hiking/create">
          Добавить Поход
        </Link>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <AllHikings />
      </Suspense>
    </div>
  );
};

async function AllHikings() {
  const data = await getAllHikingsAction();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grod-cols-3 gap-4">
      {data.map((item) => (
        <div key={item.id} className="hover:text-blue-500 transition-colors">
            <Link key={item.id} href={`/hiking/${item.id}`}>
                {item.name}
            </Link>
        </div>
      ))}
    </div>
  );
}

export default Hikings;