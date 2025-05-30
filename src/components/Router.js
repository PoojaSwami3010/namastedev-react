import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../components/About';
import Contact from '../components/Contact'
import Error from '../components/Error'
import Body from './Body';

const appRouter = createBrowserRouter([
  { path: '/', element: <App /> ,
  children:[
    { path: '/', element: <Body /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
  ],
errorElement:<Error/>},
  // { path: '/about', element: <About /> },
  // { path: '/contact', element: <Contact /> },
  
]);

export default appRouter;