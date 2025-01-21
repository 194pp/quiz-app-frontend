# Quiz App Frontend

This is a frontend application for a quiz platform, built using modern web technologies. The application allows users to take quizzes and view leaderboards.

## Features

- **Quiz Taking**: Users can take quizzes with multiple types of questions including text, radio, and checkbox inputs.
- **Leaderboard**: View high scores and compare with other users.
- **Responsive Design**: The application is designed to work on various screen sizes.
- **Dark Mode**: Supports light and dark themes.
- **State Management**: Utilizes Redux for state management.
- **API Integration**: Fetches quiz data and submits results to a backend API.

## Technologies Used

- **React**: For building the user interface.
- **Redux Toolkit**: For state management.
- **Vite**: As the build tool.
- **Tailwind CSS**: For styling.
- **TanStack Router**: For routing.
- **Embla Carousel**: For carousel functionality.
- **Sonner**: For toast notifications.

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/quiz-app-frontend.git
   cd quiz-app-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add your environment variables. Refer to `.env.example` for the required variables.

### Running the Application

- To start the development server:

  ```bash
  npm run dev
  # or
  yarn dev
  ```

- To build the application for production:

  ```bash
  npm run build
  # or
  yarn build
  ```

- To preview the production build:

  ```bash
  npm run serve
  # or
  yarn serve
  ```

## Project Structure

- **src/components**: Contains reusable UI components.
- **src/routes**: Contains route components for different pages.
- **src/store**: Contains Redux slices and store configuration.
- **src/hooks**: Contains custom hooks.
- **src/types**: Contains TypeScript type definitions.

## Key Files

- **`src/main.tsx`**: Entry point of the application.
- **`src/routes/__root.tsx`**: Root route component.
- **`src/components/quiz/quiz-card.tsx`**: Component for rendering quiz questions.
- **`src/components/leaderboard/leaderboard-table.tsx`**: Component for displaying the leaderboard.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

## Contact

For any questions or feedback, please contact [your-email@example.com](mailto:your-email@example.com).

---

This README provides a basic overview of the project. For more detailed information, please refer to the code and comments within the project files.
