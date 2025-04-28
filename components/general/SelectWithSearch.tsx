"use client";

import { FC, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface ISelectItem {
  label: string;
  value: string;
}

interface ISelectWithSearch {
  inputName: string;
  onSelect?: (item: ISelectItem | string) => void; // todo: check type!
  options: ISelectItem[];
  title: string;
}

const SelectWithSearch: FC<ISelectWithSearch> = ({ inputName, onSelect, options, title }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  console.log(options);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {value ? options.find((item) => item.label === value)?.label : `Выбери ${title}...`}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={`Найти ${title}...`} />
          <CommandList>
            <CommandEmpty>Не найден(ы) {title}(ы) с таким названием.</CommandEmpty>
            <CommandGroup>
              {options.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.label}
                  onSelect={(currentValue: string) => {
                    const newValue = currentValue === value ? "" : currentValue;
                    setValue(newValue);
                    if (onSelect) onSelect(newValue);
                    const tempInput = document.getElementById(inputName);
                    tempInput?.setAttribute("value", item.value);
                    setOpen(false);
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", value === item.value ? "opacity-100" : "opacity-0")} />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SelectWithSearch;
