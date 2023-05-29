import { RouterProvider, createBrowserRouter } from "react-router-dom";
//pages
import ResponsePage from "./pages/ResponsePage";
import FormPage from "./pages/FormPage";

//layouts
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <FormPage />,
        
      },
      {
        path: "/response",
        element: <ResponsePage />,
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
