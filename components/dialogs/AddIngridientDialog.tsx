import { FC } from "react";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { BlueRoundButton } from "../Buttons";
import AddIngridientForm from "../forms/AddIngridientForm";

interface IAddIngridientDialog {
  userId: string;
  recipeId: string;
}

const AddIngridientDialog: FC<IAddIngridientDialog> = (props) => (
  <Dialog>
    <DialogTrigger asChild>
      <div>
        <BlueRoundButton label="Add Ingridient" />
      </div>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[600px]">
      <DialogHeader>
        <DialogTitle>Add Ingridient</DialogTitle>
        <DialogDescription>... and his quantity</DialogDescription>
      </DialogHeader>
      <AddIngridientForm {...props} />
    </DialogContent>
  </Dialog>
);

export default AddIngridientDialog;
