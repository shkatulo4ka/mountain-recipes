import { IEating } from "@/app/_interfaces/recipe.interfaces";
import Heading from "./Heading";

interface IDayEatings {
  data: IEating[];
}

interface IEatingsList extends IDayEatings {
  timeId: "0" | "1" | "2" | "3"; // todo: вынести и переиспользовать?
}

const EatingsList = ({ data, timeId }: IEatingsList) => (
  <ul className="list-disc my-2 mx-5">
    {data
      .filter((el) => el.eatingTimeId === timeId)
      .map((el) => (
        <li key={el.id}>{el.recipe.name}</li>
      ))}
  </ul>
);

// todo: здесь можно мапать список приемов пищи и брать Id и название оттуда
// данные из бд брать лучше - вдруг что-то переименуется или добавится? но пока mvp)
const DayEatings = ({ data }: IDayEatings) => (
  <div className="w-[600px]">
    <Heading title="Завтрак" size="xl" />
    <EatingsList timeId={"1"} data={data} />
    <Heading title="Обед" size="xl" />
    <EatingsList timeId={"2"} data={data} />
    <Heading title="Ужин" size="xl" />
    <EatingsList timeId={"3"} data={data} />
    <Heading title="Перекусы" size="xl" />
    <EatingsList timeId={"0"} data={data} />
  </div>
);

export default DayEatings;
