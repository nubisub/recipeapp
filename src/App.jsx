import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from "./Navbar.jsx";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Pricing from "./Pricing.jsx";
import Recipes from "./Recipes.jsx";
import Home from "./Home.jsx";
import Detail from "./Detail.jsx";



function App() {
  const [count, setCount] = useState(0)

  return (
      <HashRouter>
          <Routes>
              <Route path="/" element={<Navbar />}>
                  <Route index element={<Home />} />
                  <Route path="Recipes" element={<Recipes />} />
                  <Route path="Pricing" element={<Pricing />} />
                  <Route path="detail/:id" element={<Detail />} />
              </Route>
          </Routes>
      </HashRouter>
  )
}

export default App
