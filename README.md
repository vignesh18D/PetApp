# PetApp

## Overview

PetApp is a web application built using the MERN stack that allows users to browse and search for pets. The application fetches pet data from an API and displays it on the homepage. Users can search for pets by name or breed and view detailed information about each pet by clicking on the pet card.

## Features

- *Home Page*: Displays a list of pets with their images, names, animals, and breeds.
- *Search Functionality*: Users can search for pets by name or breed using the search bar.
- *Pet Details Page*: Clicking on a pet card navigates to a detailed page displaying additional information about the pet.
- *Responsive Design*: The application is responsive and works well on different screen sizes.

## Technologies Used

- *Frontend*: React, React Router, CSS
- *Build Tool*: Vite
- *Code Quality*: ESLint
- *Icons*: react-icons

## Setup and Installation

### Prerequisites

-  npm installed on your machine

### Installation Steps

1. *Clone the repository:*
    sh
    git clone https://github.com/vignesh18D/PetApp
    cd petapp
    

2. *Install the dependencies:*
    sh
    npm install
    

3. *Start the development server:*
    sh
    npm run dev
    

4. *Open the application in your browser:*
    
    http://localhost:5173/
    

## Project Structure

- src/: Contains all the source code
  - pages/: Contains the React components for different pages (Home, Single)
  - App.jsx: Main application component
  - index.css: Global CSS file
  - main.jsx: Entry point for the React application
- public/: Contains the static files
  - index.html: Main HTML file

## Code Explanation

### Home Page

- *Home.jsx*: This component fetches the list of pets from the API and displays them. It includes a search bar to filter pets by name or breed.

### Single Pet Page

- *Single.jsx*: This component fetches detailed information about a specific pet based on the ID from the URL.

### CSS

- *Home.css*: Contains the styles for the Home component.
- *Single.css*: Contains the styles for the Single component.

### ESLint Configuration

- *.eslintrc*: ESLint configuration file to ensure code quality and consistency.

## Error Handling

- The application includes error handling for API requests. If an error occurs while fetching pet data, an error message is displayed.

## Best Practices

- The code follows best practices for React development, including state management using hooks, component-based architecture, and proper error handling.
- ESLint is used to enforce coding standards and improve code quality.

## Future Improvements

- *Pagination*: Implement pagination to improve the user experience when browsing a large number of pets.
- *Enhanced Search Functionality*: Add more filters (e.g., by location, age) to refine the search results.
- *Improved UI/UX*: Enhance the design and user experience of the application.

## Contributing

Contributions are welcome! If you have any suggestions or find any issues, please create a pull request or open an issue on GitHub.

