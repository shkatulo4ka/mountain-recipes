import { IEating } from "@/app/_interfaces/recipe.interfaces";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DayEatings from "./DayEatings";
import Heading from "./Heading";

interface IDaysTabsProps {
  daysTotal: number;
  membersTotal: number;
  data: IEating[];
}

const DaysTabs = ({ daysTotal, data }: IDaysTabsProps) => {
  const dayNumbers = Array.from({ length: daysTotal }, (_, i) => i + 1);
  const getDayEatings = (eatings: IEating[], dayNumber: number) =>
    eatings.filter((eating) => eating.dayNumber == dayNumber);

  return (
    <Tabs defaultValue="day1" className="w-[800px] flex-row" orientation="vertical">
      <TabsList className="grid w-full grid-cols-1">
        {dayNumbers.map((day) => (
          <TabsTrigger value={`day${day}`} key={`day${day}`}>
            День {day}
          </TabsTrigger>
        ))}
      </TabsList>
      {dayNumbers.map((day) => (
        <TabsContent value={`day${day}`} key={`day${day}`}>
          <Heading title={`День ${day}`} subtitle={`В этот день у тебя ${getDayEatings(data, day).length} рецептов`} />
          <DayEatings data={getDayEatings(data, day)} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default DaysTabs;
