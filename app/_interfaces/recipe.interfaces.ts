export interface IIngridientInRecipe {
  ingredient: {
    id: string;
    name: string;
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
