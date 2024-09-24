import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/404";
import Register from "./Pages/Register";
import Tarot_daily from "./Pages/Tarot_daily";
import Tarot_random from "./Pages/Tarot_random";
import Updatetarot from "./Pages/Updatetarot";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tarotdaily" element={<Tarot_daily/>}/>
      <Route path="/tarotRandom" element={<Tarot_random/>}/>
      <Route path="*" element={<NotFound />} />
      <Route path="/updatetarot" element={<Updatetarot />} />
    </Routes>
  )
}

export default App
