# GitHub User Search Application

A React application for searching GitHub users using the GitHub API.

## Features

- Search for GitHub users
- View user profiles and basic information
- Direct links to GitHub profiles

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. (Optional) Configure GitHub API token:
   - Create a `.env` file in the root directory
   - Add your GitHub Personal Access Token:
     ```
     VITE_GITHUB_API_KEY=your_token_here
     ```
   - Note: The app works without a token but has lower API rate limits

3. Run the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
github-user-search/
├── src/
│   ├── components/     # React components
│   ├── services/       # API services
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── .env                # Environment variables (optional)
└── package.json        # Project dependencies
```

## Technologies Used

- React (with Vite)
- Axios (for API requests)
- GitHub API

## API Information

This application uses the GitHub REST API v3. For more information, visit:
https://docs.github.com/en/rest
