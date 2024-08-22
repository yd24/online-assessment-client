import './App.css'
import { 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider,
  Route,
 } from 'react-router-dom';

import BaseLayout from './routes/BaseLayout';
import HomePage from './pages/HomePage';
import RecipesPage from './pages/RecipesPage';
import CommunityPage from './pages/CommunityPage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route 
        path="/" 
        element={<BaseLayout />}
        errorElement={<ErrorPage />}
      >
          <Route index element={<HomePage />} />
          <Route path="recipes" element={<RecipesPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="about" element={<AboutPage />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App
