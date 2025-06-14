import { IEating } from "@/app/_interfaces/recipe.interfaces";
import Heading from "./Heading";

interface IDayEatings {
  data: IEating[];
}

const DayEatings = ({ data }: IDayEatings) => (
  <div className="w-[600px]">
    <Heading title="Завтрак" size="xl" />
    {JSON.stringify(data.filter((el) => el.eatingTimeId === "1"))}
    <Heading title="Обед" size="xl" />
    {JSON.stringify(data.filter((el) => el.eatingTimeId === "2"))}
    <Heading title="Ужин" size="xl" />
    {JSON.stringify(data.filter((el) => el.eatingTimeId === "3"))}
    <Heading title="Перекусы" size="xl" />
    {JSON.stringify(data.filter((el) => el.eatingTimeId === "0"))}
  </div>
);

export default DayEatings;
