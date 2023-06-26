// import { Layout } from '../containers/Layout';
// import { Login } from '../containers/Login';
// import { EmailPassword } from '../containers/EmailPassword';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "../pages/NotFound:errorId",
    element: <NotFound/>
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
