import { IEating } from "@/app/_interfaces/recipe.interfaces";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

interface IDaysTabsProps {
    daysTotal: number,
    membersTotal: number,
    data: IEating[];
}

const DaysTabs = ({daysTotal, membersTotal, data}: IDaysTabsProps) => {
    const arr = new Array(daysTotal).fill(0);

    return (
        <Tabs defaultValue="day1" className="w-[800px] flex-row" orientation="vertical">
        <TabsList className="grid w-full grid-cols-1">
            {arr.map((el,i) => <TabsTrigger value={`day${i+1}`} key={`day${i+1}`}>День {i+1}</TabsTrigger> )}
        </TabsList>
        {arr.map((el,i) => {
            const dayEatings = data.filter(eating => eating.dayNumber == i+1)
            return (
                <TabsContent  value={`day${i+1}`} key={`day${i+1}`}>
                    <div className='w-[600px]'>
                        В этот день у тебя {dayEatings.length} приемов пищи
                    </div>
                </TabsContent>
            )
        }    
        )}
        </Tabs>

  )
    
}

export default DaysTabs;

