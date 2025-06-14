import { IEating } from "@/app/_interfaces/recipe.interfaces";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface IDaysTabsProps {
  daysTotal: number;
  membersTotal: number;
  data: IEating[];
}

const DaysTabs = ({ daysTotal, data }: IDaysTabsProps) => {
  const dayNumbers = Array.from({ length: daysTotal }, (_, i) => i + 1);

  return (
    <Tabs defaultValue="day1" className="w-[800px] flex-row" orientation="vertical">
      <TabsList className="grid w-full grid-cols-1">
        {dayNumbers.map((day) => (
          <TabsTrigger value={`day${day}`} key={`day${day}`}>
            День {day}
          </TabsTrigger>
        ))}
      </TabsList>
      {dayNumbers.map((day) => {
        const dayEatings = data.filter((eating) => eating.dayNumber == day);
        return (
          <TabsContent value={`day${day}`} key={`day${day}`}>
            <div className="w-[600px]">
              День {day}. В этот день у тебя {dayEatings.length} приемов пищи
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
};

export default DaysTabs;
