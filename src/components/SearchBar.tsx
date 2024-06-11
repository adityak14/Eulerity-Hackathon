import React from 'react';
import styled from 'styled-components';
import { usePetContext } from '../context/PetContext';

// Styling for the SearchBar.
const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  
`;

const Input = styled.input`
  padding: 15px;
  width: 600px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 2px solid #1a254a ;
  font-size: 18px
`;

// Search Bar component.
const SearchBar: React.FC = () => {
  const { dispatch } = usePetContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_FILTER', payload: e.target.value });
  };

  return (
    <div>
        <SearchContainer>
        <Input type="text" placeholder="Search" onChange={handleChange} />
        </SearchContainer>
    </div>
  );
};

export default SearchBar;
