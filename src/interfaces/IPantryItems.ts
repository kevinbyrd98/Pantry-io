export interface IPantryItem{
    itemName: string;
    datePurchased: string;
    itemCost: number;
    expirationDate: string;
    amountOfItem: string;
    rebuyItem?: boolean;
    itemType: string;
    inRecipe?: string[];
    keepStocked?: boolean;
}

export interface IRecipeIngredient{
    amountNeeded: string;
    ingredientCost: number;
    ingredientName: string;
    enoughForRecipe?: boolean; 
}

export interface IRecipe {
    ingredients: IRecipeIngredient[];
    recipeName: string;
    recipeCost: number;
    linkToRecipe?: string;
    recipeCategory?: string;
}