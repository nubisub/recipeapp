import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from "./Navbar.jsx";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Pricing from "./Pricing.jsx";
import Recipes from "./Recipes.jsx";
import Home from "./Home.jsx";
import Detail from "./Detail.jsx";
import AnimatedRouted from "./AnimatedRouted.jsx";



function App() {
  const [count, setCount] = useState(0)

  return (
      <HashRouter>
        <Navbar/>
        <AnimatedRouted/>
      </HashRouter>
  )
}

export default App
