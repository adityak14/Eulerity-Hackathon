import React from 'react';
import styled from 'styled-components';
import { usePetContext } from '../context/PetContext';

// Styling for the container and the button.
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
  font-size:15px
`;

// Function to download an image from the image URL.
const downloadImage = async (url: string, filename: string) => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/octet-stream'
      }
    });
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename + '.' + blob.type.split('/')[1];
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading the image:', error);
  }
};

// Adding a delay and component to handle downloading selected pet images.
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const DownloadButton: React.FC = () => {
  const { state } = usePetContext();

  const handleDownload = async () => {
    for (const petId of state.selectedPets) {
      const pet = state.pets.find(p => p.id === petId);
      if (pet) {
        await downloadImage(pet.url, pet.title);
        await delay(500); 
      }
    }
  };

  return (
    <ButtonContainer>
      <Button onClick={handleDownload}>Download</Button>
    </ButtonContainer>
  );
};

export default DownloadButton;
