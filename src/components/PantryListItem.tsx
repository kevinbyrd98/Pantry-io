import React, { useState } from 'react';
import { Card, CardHeader, CardTitle } from '../../@/components/ui/card';
import { ListGroupItem } from 'react-bootstrap';
import { ListItemText } from '@mui/material';
import { IPantryItem } from 'interfaces';

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
    <ListGroupItem>
      {editing ? (
        <>
          <Card>
            <CardHeader>
              item.itemName
            </CardHeader>

          </Card>
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
    </ListGroupItem>
  );
};

export default PantryListItem;