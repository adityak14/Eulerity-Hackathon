import React from 'react';
import styled from 'styled-components';
import { Pet } from '../context/PetContext';

const Card = styled.div`
  padding: 16px;
  margin: 16px;
  width: 400px;
  height: 550px;
  text-align: center;
  font-size: 14px;
  background-color: white;
  border-radius: 12px;
  position: relative;
  border: 1px solid black
`;

const Image = styled.img`
  max-width: 100%;
  height: 350px;
  width: 300px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid black
`;

const DateTimeContainer = styled.div`
  margin-top: 8px;
  line-height: 15px
`;

const DateText = styled.p`
  margin: 5px;
  font-weight: bold;
`;

const TimeText = styled.p`
  margin: 0;
  color: #666;
`;

const TickMark = styled.div`
  position: absolute;
  bottom: 16px;
  right: 50%;
  background-color: #4caf50;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  visibility: ${props => (props.selected ? 'visible' : 'hidden')};
`;

type Props = {
  pet: Pet;
  selected: boolean;
  onSelect: (id: number) => void;
  onDeselect: (id: number) => void;
};

const ImageCard: React.FC<Props> = ({ pet, selected, onSelect, onDeselect }) => {
  const date = new Date(pet.created);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return date.toLocaleTimeString(undefined, options);
  };

  return (
    <Card onClick={() => (selected ? onDeselect(pet.id) : onSelect(pet.id))}>
      <Image src={pet.url} alt={pet.title} />
      <h3>{pet.title}</h3>
      <p>{pet.description}</p>
      <DateTimeContainer>
        <DateText>{formatDate(date)}</DateText>
        <TimeText>{formatTime(date)}</TimeText>
      </DateTimeContainer>
      <TickMark selected={selected}>✓</TickMark>
    </Card>
  );
};

export default ImageCard;

