import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/404";
import RandomTarotPage from "./Pages/randomTarotCard";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/tarotCard" element= {<RandomTarotPage />}/>

      <Route path="*" element={<NotFound />} />
  
    </Routes>
  )
}

export default App
