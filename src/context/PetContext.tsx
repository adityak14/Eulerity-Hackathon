import React, { createContext, useReducer, useContext, ReactNode } from 'react';

type Pet = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
};

type State = {
  pets: Pet[];
  selectedPets: number[];
  filter: string;
  sort: 'A-Z' | 'Z-A';
};

type Action =
  | { type: 'SET_PETS'; payload: Pet[] }
  | { type: 'SELECT_PET'; payload: number }
  | { type: 'DESELECT_PET'; payload: number }
  | { type: 'SELECT_ALL' }
  | { type: 'CLEAR_SELECTION' }
  | { type: 'SET_FILTER'; payload: string }
  | { type: 'SET_SORT'; payload: 'A-Z' | 'Z-A' };

const initialState: State = {
  pets: [],
  selectedPets: [],
  filter: '',
  sort: 'A-Z',
};

const PetContext = createContext<{ state: State; dispatch: React.Dispatch<Action> }>({
  state: initialState,
  dispatch: () => null,
});

const petReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_PETS':
      return { ...state, pets: action.payload };
    case 'SELECT_PET':
      return { ...state, selectedPets: [...state.selectedPets, action.payload] };
    case 'DESELECT_PET':
      return { ...state, selectedPets: state.selectedPets.filter(id => id !== action.payload) };
    case 'SELECT_ALL':
      return { ...state, selectedPets: state.pets.map(pet => pet.id) };
    case 'CLEAR_SELECTION':
      return { ...state, selectedPets: [] };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    case 'SET_SORT':
      return { ...state, sort: action.payload };
    default:
      return state;
  }
};

export const PetProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(petReducer, initialState);

  return (
    <PetContext.Provider value={{ state, dispatch }}>
      {children}
    </PetContext.Provider>
  );
};

export const usePetContext = () => useContext(PetContext);
