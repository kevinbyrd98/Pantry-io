import { IPantryItem } from "../interfaces";

function generateRandomPantryItem(): IPantryItem {
    const randomDate = (start: Date, end: Date): Date => {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    };
  
    const randomBoolean = (): boolean => {
      return Math.random() < 0.5;
    };
  
    const randomAmount = (): string => {
      const units = ['unit', 'pound', 'ounce', 'gram'];
      const randomIndex = Math.floor(Math.random() * units.length);
      const randomValue = Math.ceil(Math.random() * 10);
      return `${randomValue} ${units[randomIndex]}${randomValue > 1 ? 's' : ''}`;
    };
  
    const randomRecipes = (): string[] => {
      const recipes = ['Recipe 1', 'Recipe 2', 'Recipe 3', 'Recipe 4', 'Recipe 5'];
      const numRecipes = Math.floor(Math.random() * (recipes.length + 1));
      return recipes.slice(0, numRecipes);
    };
  
    const datePurchased = randomDate(new Date(2021, 0, 1), new Date()).toISOString().split('T')[0];
    const itemCost = Math.floor(Math.random() * 20) + 1;
    const expirationDate = randomDate(new Date(), new Date(2024, 0, 1)).toISOString().split('T')[0];
    const amountOfItem = randomAmount();
    const rebuyItem = randomBoolean();
    const itemType = ['Grocery', 'Produce', 'Dairy', 'Bakery'][Math.floor(Math.random() * 4)];
    const inRecipe = randomRecipes();
    const keepStocked = randomBoolean();
  
    return {
      datePurchased,
      itemCost,
      expirationDate,
      amountOfItem,
      rebuyItem,
      itemType,
      inRecipe,
      keepStocked,
    };
  }
  
  const pantryItems: IPantryItem[] = Array.from({ length: 30 }, () => generateRandomPantryItem());
  
  export default pantryItems;