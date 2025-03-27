# Posts App 📝  

A simple React app that fetches and displays posts using **Redux Toolkit** and a **custom hook**.  

## Features  
✅ Fetch posts from an API using Redux Async Thunk  
✅ Manage global state with Redux Toolkit  
✅ Use a custom hook (`useFetch`) to handle data fetching  
✅ Refresh posts with a button  

## Installation  

```sh
pnpm install
pnpm run dev
```

## Project Structure  

- **Redux Store**: Manages global state (`store.js`)  
- **Redux Slice**: Handles API calls and state (`postsSlice.js`)  
- **Custom Hook (`useFetch.js`)**: Fetches and refreshes posts  
- **Component (`PostsList.js`)**: Displays posts using the custom hook  

## Usage  

- The app fetches posts when loaded.  
- Click the **Refresh** button to fetch new data.  

## Tech Stack  
- React  
- Redux Toolkit  
- PNPM  

