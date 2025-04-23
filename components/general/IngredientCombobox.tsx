'use client'

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { getAllIngredientsAction } from "@/app/_actions/ingredientActions"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const IngredientCombobox = async () => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const ingredients = await getAllIngredientsAction();
  
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? ingredients.find((ingredient) => ingredient.id === value)?.name
            : "Выбери ингредиент..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Найти ингредиент..." />
          <CommandList>
            <CommandEmpty>Не найдены ингредиенты с таким названием.</CommandEmpty>
            <CommandGroup>
              {ingredients.map((ingredient) => (
                <CommandItem
                  key={ingredient.id}
                  value={ingredient.id}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === ingredient.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {ingredient.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default IngredientCombobox