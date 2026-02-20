# React Tic-Tac-Toe


This repository contains the source code for a classic Tic-Tac-Toe game built with React and bootstrapped with Vite. The application allows two players to compete, edit their names, and play until a winner is determined or the game ends in a draw.

## Features

*   **Interactive Gameplay**: A fully functional 3x3 Tic-Tac-Toe grid.
*   **Player Customization**: Ability to edit player names in-line.
*   **Active Player Highlighting**: The current player's turn is visually indicated.
*   **Win and Draw Detection**: The game automatically detects and announces a win or a draw.
*   **Game Log**: A running log displays the sequence of moves made by each player.
*   **Rematch Option**: Players can easily start a new game after one concludes.
*   **State Management with Hooks**: Utilizes React hooks like `useState` for efficient state management.

## Project Structure

The project is organized into several key components to create a modular and maintainable codebase:

*   `App.jsx`: The root component that manages the overall game state, including game turns, player data, and win/draw logic.
*   `Components/GameBoard.jsx`: Renders the game board and handles square selection events.
*   `Components/Player.jsx`: A reusable component for displaying player information and handling name edits.
*   `Components/GameOver.jsx`: A modal overlay that appears when the game is over, displaying the result and a "Rematch" button.
*   `Components/Log.jsx`: Displays a history of all turns taken during the game.
*   `winning-combination.js`: A utility file that exports the array of all possible winning combinations.

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/ShohebMomin/tic-tac-toe-starting-project.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd tic-tac-toe-starting-project
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    ```

4.  **Start the development server:**
    ```sh
    npm run dev
    ```

    The application will be available at `http://localhost:5173`.

## Available Scripts

This project comes with several pre-configured npm scripts:

*   `npm run dev`: Starts the Vite development server with Hot Module Replacement (HMR).
*   `npm run build`: Compiles and bundles the application for production into the `dist` directory.
*   `npm run lint`: Lints the source code using ESLint to enforce code quality.
*   `npm run preview`: Serves the production build locally to preview the final application.
