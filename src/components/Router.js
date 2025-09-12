import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../components/About';
import Contact from '../components/Contact';
import Error from '../components/Error';
import Body from './Body';
import ResturantMenu from './ResturantMenu';
import { lazy, Suspense } from 'react';

// Lazy load Grocery
const GroceryLazy = lazy(() => import('./Grocery'));

const appRouter = createBrowserRouter([
  { 
    path: '/', 
    element: <App />,
    children: [
      { path: '/', element: <Body /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/restaurant/:resId', element: <ResturantMenu /> },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>Loading Grocery...</h1>}>
            <GroceryLazy />
          </Suspense>
        )
      }
    ],
    errorElement: <Error />
  }
]);

export default appRouter;
