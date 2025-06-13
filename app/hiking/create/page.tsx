import { createHikingAction } from "@/app/_actions/hikingActions";
import SubmitButton from "@/components/general/SubmitButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function CreateHiking() {
  return (
    <div className="m-2">
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Create Hiking</CardTitle>
          <CardDescription>Create new hiking</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-2" action={createHikingAction}>
            <div className="flex flex-col gap-2">
              <Label>Название</Label>
              <Input name="name" required type="text" placeholder="Введи название" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Количество дней</Label>
              <Input name="daysTotal" required type="number" placeholder="Введи количество дней похода" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Количество участников</Label>
              <Input name="membersTotal" required type="number" placeholder="Введи количество участников" />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
