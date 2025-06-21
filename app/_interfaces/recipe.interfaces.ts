export interface IIngridientInRecipe {
  ingredient: {
    id: string;
    name: string;
    kkal: number;
  };
  quantity: number | null;
}

export interface IBaseRecipe {
  id: string;
  createdAt: Date;
  name: string;
  description: string | null;
  kkal: number | null;
  ingredients: IIngridientInRecipe[];
}

export interface IEating {
  id: string;
  hikingId: string;
  dayNumber: number;
  eatingTimeId: string;
  recipe: {
    name: string;
    id: string;
  };
}
