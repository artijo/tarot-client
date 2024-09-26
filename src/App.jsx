import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/404";
import Register from "./Pages/Register";
import Tarot_daily from "./Pages/Tarot_daily";
import Tarot_random from "./Pages/Tarot_random";
import Updatetarot from "./Pages/Updatetarot";
import SixCategory from "./Pages/SixCategory";
import Zodiac from "./Pages/Zodiac";
import Zodiac_Hroscope from "./Pages/Zodiac_Hroscope";
import HroscopeZodiac from "./Pages/HroscopeZodiac";
import SingInWithGoogle from "./Pages/SignInWithGoogle";
import { AuthProvider } from "./context/contextAuth";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tarotdaily" element={<Tarot_daily/>}/>
        <Route path="/tarotRandom" element={<Tarot_random/>}/>
        <Route path="/updatetarot" element={<Updatetarot />} />
        <Route path="/sixgategory" element={<SixCategory />} />
        <Route path="/zodiac" element={<Zodiac />} />
        <Route path="/zodia_hroscopec" element={<Zodiac_Hroscope />} />
        <Route path="/hroscopeZodiac" element={<HroscopeZodiac />} />
        <Route path="/signinwithgoogle" element={<SingInWithGoogle/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>    
  )
}

export default App
