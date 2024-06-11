import { useEffect } from 'react';
import { usePetContext } from '../context/PetContext';

// A Custom hook to fetch and manage pet data.
const usePets = () => {
  const { state, dispatch } = usePetContext();

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('https://eulerity-hackathon.appspot.com/pets');
        const data = await response.json();
        
        // Adding an id to each pet object.
        const petsWithId = data.map((pet: any, index: number) => ({
          id: index + 1,
          ...pet
        }));
        dispatch({ type: 'SET_PETS', payload: petsWithId });
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();
  }, [dispatch]);

  return state;
};

export default usePets;
