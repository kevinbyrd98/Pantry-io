import React, { useState } from 'react';
import { ListItem, ListItemText, TextField, Checkbox } from '@mui/material';

interface IPantryItem {
  datePurchased: string;
  itemCost: number;
  expirationDate: string;
  amountOfItem: string;
  rebuyItem?: boolean;
  itemType: string;
  inRecipe?: string[];
  keepStocked?: boolean;
}

interface PantryListItemProps {
  item: IPantryItem;
  index: number;
  onItemUpdate: (updatedItem: IPantryItem, index: number) => void;
}

const PantryListItem: React.FC<PantryListItemProps> = ({ item, index, onItemUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [editedFields, setEditedFields] = useState<Partial<IPantryItem>>({});

  const handleFieldChange = (fieldName: keyof IPantryItem, value: any) => {
    setEditedFields((prevFields) => ({ ...prevFields, [fieldName]: value }));
  };

  const handleSaveEdit = () => {
    const updatedItem: IPantryItem = {
      ...item,
      ...editedFields,
    };
    onItemUpdate(updatedItem, index);
    setEditing(false);
    setEditedFields({});
  };

  return (
    <ListItem>
      {editing ? (
        <>
          <TextField
            label="Date Purchased"
            value={editedFields.datePurchased || item.datePurchased}
            onChange={(e: { target: { value: any; }; }) => handleFieldChange('datePurchased', e.target.value)}
          />
          <TextField
            label="Item Cost"
            type="number"
            value={editedFields.itemCost || item.itemCost}
            onChange={(e: { target: { value: any; }; }) => handleFieldChange('itemCost', Number(e.target.value))}
          />
          <TextField
            label="Expiration Date"
            value={editedFields.expirationDate || item.expirationDate}
            onChange={(e: { target: { value: any; }; }) => handleFieldChange('expirationDate', e.target.value)}
          />
          <TextField
            label="Amount of Item"
            value={editedFields.amountOfItem || item.amountOfItem}
            onChange={(e: { target: { value: any; }; }) => handleFieldChange('amountOfItem', e.target.value)}
          />
          <Checkbox
            checked={editedFields.rebuyItem ?? item.rebuyItem}
            onChange={(e) => handleFieldChange('rebuyItem', e.target.checked)}
          />
          <TextField
            label="Item Type"
            value={editedFields.itemType || item.itemType}
            onChange={(e: { target: { value: any; }; }) => handleFieldChange('itemType', e.target.value)}
          />
          <TextField
            label="In Recipe"
            value={editedFields.inRecipe ? editedFields.inRecipe.join(', ') : item.inRecipe?.join(', ')}
            onChange={(e: { target: { value: string; }; }) => handleFieldChange('inRecipe', e.target.value.split(', '))}
          />
          <Checkbox
            checked={editedFields.rebuyItem ?? item.rebuyItem}
            onChange={(e) => handleFieldChange('rebuyItem', e.target.checked)}
          />
          <button onClick={handleSaveEdit}>Save</button>
        </>
      ) : (
        <>
          <ListItemText primary={`Date Purchased: ${item.datePurchased}`} />
          <ListItemText primary={`Item Cost: ${item.itemCost}`} />
          <ListItemText primary={`Expiration Date: ${item.expirationDate}`} />
          <ListItemText primary={`Amount of Item: ${item.amountOfItem}`} />
          <ListItemText primary={`Rebuy Item: ${item.rebuyItem ? 'Yes' : 'No'}`} />
          <ListItemText primary={`Item Type: ${item.itemType}`} />
          <ListItemText primary={`In Recipe: ${item.inRecipe ? item.inRecipe.join(', ') : 'N/A'}`} />
          <ListItemText primary={`Keep Stocked: ${item.keepStocked ? 'Yes' : 'No'}`} />
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )};
    </ListItem>
  );
};

export default PantryListItem;