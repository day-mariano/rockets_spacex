import './App.css';
import Rockets from './Rockets';
import Rocket from './Rocket';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Rockets />
    ),
  },
  {
    path: "/rockets/:id",
    element: (
      <Rocket />
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <h1>SpaceX Rockets</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
