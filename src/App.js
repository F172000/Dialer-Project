import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import DailerScreen from './components/DailerScreen';
import DailedNumberScreen from './components/DailedNumberScreen';
import CalllogScreen from './components/CalllogScreen';
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<DailerScreen/>
  },
  {
    path:'/Dail',
    element:<DailedNumberScreen/>
  },
  {
    path:'/Log',
    element:<CalllogScreen/>
  }
  ])
  return (
    <main>
       <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
