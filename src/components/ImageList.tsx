import React from 'react';
import styled from 'styled-components';
import ImageCard from './ImageCard';
import { usePetContext } from '../context/PetContext';

// Styling for the Image List.
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// Component for displaying a list of image cards.
const ImageList: React.FC = () => {
  const { state, dispatch } = usePetContext();

  const filteredPets = state.pets
    .filter(pet =>
      pet.title.toLowerCase().includes(state.filter.toLowerCase()) ||
      pet.description.toLowerCase().includes(state.filter.toLowerCase())
    )
    .sort((a, b) => {
      if (state.sort === 'A-Z') return a.title.localeCompare(b.title);
      if (state.sort === 'Z-A') return b.title.localeCompare(a.title);
      return 0;
    });

  const handleSelect = (id: number) => dispatch({ type: 'SELECT_PET', payload: id });
  const handleDeselect = (id: number) => dispatch({ type: 'DESELECT_PET', payload: id });

  return (
    <List>
      {filteredPets.map(pet => (
        <ImageCard
          key={pet.id}
          pet={pet}
          selected={state.selectedPets.includes(pet.id)}
          onSelect={handleSelect}
          onDeselect={handleDeselect}
        />
      ))}
    </List>
  );
};

export default ImageList;
