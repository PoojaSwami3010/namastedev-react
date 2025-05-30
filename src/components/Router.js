import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../components/About';

const appRouter = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/about', element: <About /> },
  { path: '/conatct', element: <Contact /> },
]);

export default appRouter;