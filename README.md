# Pet Corner

A React application for viewing and downloading pet images.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Setup](#setup)
- [Components](#components)
- [Hooks](#hooks)
- [Context](#context)
- [Styles](#styles)
- [Project Screenshots](#project-screenshots)

## Introduction

This project is a web application built with React and TypeScript that allows users to view and download images of pets. It uses styled-components for styling and react-router-dom for navigation.

## Features

- Display a list of pet images
- Select and download images
- Search and filter images
- Sort images by name
- User-friendly interface

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/adityak14/Eulerity-Hackathon.git
   cd Eulerity-Hackathon

2. Install Dependencies:
   ```bash
   npm install

3. Start the development server:
      ```bash
   npm run dev

## Components
`ImageCard.tsx`:
A card component that displays a pet image, its title, description, and creation date/time. It would also show which images have been selected with the help of a tick mark.

`ImageList.tsx`:
Displays a list of ImageCard components and uses context to fetch and manage pet data.

`NavBar.tsx`:
A navigation bar with links to the Home and About pages.

`SearchBar.tsx`:
A search input for filtering the list of pets by title or description.

`SortButtons.tsx`:
Buttons that helps in sorting the list of pets alphabetically (A-Z, Z-A).

`SelectButtons.tsx`:
Buttons that helps in selecting all pets or clearing the selected images.

`DownloadButton.tsx`:
Button to download the selected pet images.

## Hooks
`usePets.tsx`:
A custom hook to fetch and manage pet data from the pets.json file. Uses context for state management.

## Pages
`Home.tsx`:
The main page displaying the search bar, sort buttons, select buttons, download button, and the list of images.

`About.tsx`:
A page displaying my personal information.

## Context
`PetContext.tsx`:
Provides a context for managing the state of the pet data and selected pets.

## Styles
`GlobalStyle.ts`:
Defines global styles for the application using styled-components.

## Project Screenshots

### Home Page
![image](https://github.com/adityak14/Eulerity-Hackathon/assets/44731657/ca8e50b0-8e8c-4e38-b311-e8afcfc05981)

### About Page
![image](https://github.com/adityak14/Eulerity-Hackathon/assets/44731657/4e72dad8-586f-47c0-bb21-f1554452fb9f)


