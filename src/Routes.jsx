import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Jobs from "./Pages/Jobs";
import Employer from "./Pages/Employer";
import Insights from "./Pages/Insights";
import NotFound from "./Pages/NotFound";
import Layout from "./Components/Layout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        { 
            path: "/", 
            element: <Home /> 
        },
        { 
            path: "/about", 
            element: <About /> 
        },
        { 
            path: "/contact", 
            element: <Contact /> 
        },
        { 
            path: "/jobs", 
            element: <Jobs /> 
        },
        { 
            path: "/employers", 
            element: <Employer /> 
        },
        { 
            path: "/insights", 
            element: <Insights /> 
        },
    ],
  },
  {
    path: "*",
    element: <NotFound />
  }
]);


const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
