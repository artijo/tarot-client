import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/404";
import Register from "./Pages/Register";
import Tarot_Birthdate from "./Pages/Tarot_daily";
import Tarot_daily from "./Pages/Tarot_daily";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tarotdaily" element={<Tarot_daily/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
