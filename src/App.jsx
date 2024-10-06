import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import NotFound from "./Pages/404";
import Tarot_daily from "./Pages/Tarot_daily";
import Tarot_random from "./Pages/Tarot_random";
import Updatetarot from "./Pages/Updatetarot";
import SixCategory from "./Pages/SixCategory";
import Zodiac from "./Pages/Zodiac";
import Zodiac_Hroscope from "./Pages/Zodiac_Hroscope";
import HroscopeZodiac from "./Pages/HroscopeZodiac";
import SingInWithGoogle from "./Pages/SignInWithGoogle";
import { AuthProvider } from "./context/contextAuth";
import Pirvatepredict from "./Pages/Privatepredict";
import AnswerPredict from "./Pages/AnswerPredict";
import Profile from "./Pages/Profile";
import Dailypredicpage from "./Pages/dailypredicpage";
import Colors from "./Pages/Colors";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SingInWithGoogle/>} />
        <Route path="/tarotdaily" element={<Tarot_daily/>}/>
        <Route path="/dailypage" element={<Dailypredicpage/>}/>
        <Route path="/tarotRandom" element={<Tarot_random/>}/>
        <Route path="/updatetarot" element={<Updatetarot />} />
        <Route path="/sixcategory" element={<SixCategory />} />
        <Route path="/zodiac" element={<Zodiac />} />
        <Route path="/zodia_hroscopec" element={<Zodiac_Hroscope />} />
        <Route path="/hroscopeZodiac" element={<HroscopeZodiac />} />
        <Route path="/privatepredict" element={<Pirvatepredict />} />
        <Route path="/answerpredict" element={<AnswerPredict />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/colors" element={<Colors />} />
        
      </Routes>
    </AuthProvider>    
  )
}

export default App
