import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Dashboard from './views/Dashboard';

function App() {
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "dashboard",
      element: <Dashboard/>,
    },
  ]);
  


  return (
    <div className="App">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
