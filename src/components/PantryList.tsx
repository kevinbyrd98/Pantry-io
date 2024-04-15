import React from 'react';
import { Typography } from '@mui/material';
import  ListGroup  from 'react-bootstrap/ListGroup';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import PantryListItem from './PantryListItem';
import { IPantryItem } from '../interfaces';



interface PantryListProps {
  pantryItems: IPantryItem[];
  onReorder: (newPantryItems: IPantryItem[]) => void;
  onItemUpdate: (updatedItem: IPantryItem, index: number) => void;
}

const PantryList: React.FC<PantryListProps> = ({ pantryItems, onReorder, onItemUpdate }) => {
  const handleDragEnd = (result: any) => {
    if (!result.destination) return; // Return if dropped outside the list
    const items = Array.from(pantryItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    onReorder(items);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Typography variant="h5">Pantry List</Typography>
      <Droppable droppableId="pantryItems">
        {(provided) => (
          <ListGroup {...provided.droppableProps} ref={provided.innerRef}>
            {pantryItems.map((item, index) => (
              <PantryListItem
                key={index}
                item={item}
                index={index}
                onItemUpdate={onItemUpdate}
              />
            ))}
            {provided.placeholder}
          </ListGroup>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default PantryList;