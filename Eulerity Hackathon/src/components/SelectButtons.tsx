import React from 'react';
import styled from 'styled-components';
import { usePetContext } from '../context/PetContext';

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

const SelectButtons: React.FC = () => {
  const { dispatch } = usePetContext();

  return (
    <ButtonContainer>
      <Button onClick={() => dispatch({ type: 'SELECT_ALL' })}>Select All</Button>
      <Button onClick={() => dispatch({ type: 'CLEAR_SELECTION' })}>Clear Selection</Button>
    </ButtonContainer>
  );
};

export default SelectButtons;
