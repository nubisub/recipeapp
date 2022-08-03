import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from "./Navbar.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Pricing from "./Pricing.jsx";
import Recipes from "./Recipes.jsx";
import Home from "./Home.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Navbar />}>
                  <Route index element={<Home />} />
                  <Route path="Recipes" element={<Recipes />} />
                  <Route path="Pricing" element={<Pricing />} />
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App