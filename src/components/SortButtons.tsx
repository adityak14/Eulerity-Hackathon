import React from 'react';
import styled from 'styled-components';
import { usePetContext } from '../context/PetContext';

// Styling for the container and the buttons.
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 8px 0;
`;

const Button = styled.button`
  padding: 12px 18px;
  margin: 0 4px;
  background-color: #004f9e;
  border-radius: 15px;
  color: white;
  font-weight: bold;
`;

// Component for the sort buttons.
const SortButtons: React.FC = () => {
  const { dispatch } = usePetContext();

  return (
    <ButtonContainer>
      <Button onClick={() => dispatch({ type: 'SET_SORT', payload: 'A-Z' })}>Sort A-Z</Button>
      <Button onClick={() => dispatch({ type: 'SET_SORT', payload: 'Z-A' })}>Sort Z-A</Button>
    </ButtonContainer>
  );
};

export default SortButtons;
