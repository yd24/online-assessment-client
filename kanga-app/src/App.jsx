import './App.css'
import { 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider,
  Route,
  ScrollRestoration,
 } from 'react-router-dom';
 import { lazy, Suspense } from 'react';

import BaseLayout from './routes/BaseLayout';
import RecipesPage from './pages/RecipesPage';
import CommunityPage from './pages/CommunityPage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import Loading from './components/Loading';

const HomePage = lazy(() => import('./pages/HomePage'));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route 
        path="/" 
        element={<BaseLayout />}
        errorElement={<ErrorPage />}
      >
          <Route index element={
            <Suspense fallback={<Loading />}>
              <HomePage />
            </Suspense>
          } />
          <Route path="recipes" element={<RecipesPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="about" element={<AboutPage />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>

  );
}

export default App
