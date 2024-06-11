import React from 'react';
import styled from 'styled-components';
import ImageList from '../components/ImageList';
import SearchBar from '../components/SearchBar';
import SortButtons from '../components/SortButtons';
import SelectButtons from '../components/SelectButtons';
import DownloadButton from '../components/DownloadButton';
import usePets from '../hooks/usePets';

// Styling for the Home Page.
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d1e7ff;
  min-height: 100vh;
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 2em;
  margin: 20px 0;
  text-align: center;
  color: #333;
`;

const Subheading = styled.h2`
  font-size: 1.2em;
  margin-bottom: 20px;
  text-align: center;
  color: #777;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

// Home page component.
const Home: React.FC = () => {
  usePets();

  return (
    <Container>
      <SearchBar />
      <ButtonContainer>
        <SortButtons />
        <SelectButtons />
        <DownloadButton />
      </ButtonContainer>
      <ImageList />
    </Container>
  );
};

export default Home;
