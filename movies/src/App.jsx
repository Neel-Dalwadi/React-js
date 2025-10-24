import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getMoviesData } from "./api/GetAPIData";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <main className="flex-grow bg-gray-100 min-h-screen">
          <Home />
        </main>
        <Footer />
      </>
    ),
    errorElement: <Error />,
  },
  {
    path: "/movies",
    element: (
      <>
        <Header />
        <main className="flex-grow bg-gray-100 min-h-screen">
          <Movies />
        </main>
        <Footer />
      </>
    ),
    loader: getMoviesData,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <main className="flex-grow bg-gray-100 min-h-screen">
          <About />
        </main>
        <Footer />
      </>
    ),
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: (
      <>
        <Header />
        <main className="flex-grow bg-gray-100 min-h-screen">
          <Contact />
        </main>
        <Footer />
      </>
    ),
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<div>Loading...</div>}
    />
  );
}

export default App;
