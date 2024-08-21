import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import RecipesPage from './pages/RecipesPage';
import CommunityPage from './pages/CommunityPage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/recipes',
      element: <RecipesPage />,
    },
    {
      path: '/community',
      element: <RecipesPage />,
    },
    {
      path: '/about',
      element: <RecipesPage />,
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App
