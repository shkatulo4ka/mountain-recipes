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
