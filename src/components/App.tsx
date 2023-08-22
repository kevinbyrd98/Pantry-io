import React, { useState } from 'react';
import PantryList from './PantryList';
import { IPantryItem } from '../interfaces';



const App: React.FC = () => {
  const [pantryItems, setPantryItems] = useState<IPantryItem[]>([
    {
      datePurchased: '2023-06-01',
      itemCost: 10,
      expirationDate: '2023-07-01',
      amountOfItem: '2 pounds',
      rebuyItem: true,
      itemType: 'Produce',
      inRecipe: ['Salad'],
      keepStocked: true,
    },
    {
      datePurchased: '2023-06-01',
      itemCost: 10,
      expirationDate: '2023-07-01',
      amountOfItem: '2 pounds',
      rebuyItem: true,
      itemType: 'Produce',
      inRecipe: ['Salad'],
      keepStocked: true,
    },
    {
      datePurchased: '2023-06-01',
      itemCost: 10,
      expirationDate: '2023-07-01',
      amountOfItem: '2 pounds',
      rebuyItem: true,
      itemType: 'Produce',
      inRecipe: ['Salad'],
      keepStocked: true,
    },
    {
      datePurchased: '2023-06-01',
      itemCost: 10,
      expirationDate: '2023-07-01',
      amountOfItem: '2 pounds',
      rebuyItem: true,
      itemType: 'Produce',
      inRecipe: ['Salad'],
      keepStocked: true,
    },
    {
      datePurchased: '2023-06-01',
      itemCost: 10,
      expirationDate: '2023-07-01',
      amountOfItem: '2 pounds',
      rebuyItem: true,
      itemType: 'Produce',
      inRecipe: ['Salad'],
      keepStocked: true,
    },
    {
      datePurchased: '2023-06-01',
      itemCost: 10,
      expirationDate: '2023-07-01',
      amountOfItem: '2 pounds',
      rebuyItem: true,
      itemType: 'Produce',
      inRecipe: ['Salad'],
      keepStocked: true,
    },
    {
      datePurchased: '2023-06-01',
      itemCost: 10,
      expirationDate: '2023-07-01',
      amountOfItem: '2 pounds',
      rebuyItem: true,
      itemType: 'Produce',
      inRecipe: ['Salad'],
      keepStocked: true,
    },
    {
      datePurchased: '2023-06-01',
      itemCost: 10,
      expirationDate: '2023-07-01',
      amountOfItem: '2 pounds',
      rebuyItem: true,
      itemType: 'Produce',
      inRecipe: ['Salad'],
      keepStocked: true,
    }
    // Add more pantry items as needed
  ]);

  const handleReorder = (newPantryItems: IPantryItem[]) => {
    setPantryItems(newPantryItems);
  };

  const handleItemUpdate = (updatedItem: IPantryItem, index: number) => {
    setPantryItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index] = updatedItem;
      return updatedItems;
    });
  };

  return (
    <div className="App">
      <PantryList pantryItems={pantryItems} onReorder={handleReorder} onItemUpdate={handleItemUpdate} />
    </div>
  );
};

export default App;