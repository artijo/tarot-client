import UserLayout from "../Layouts/userLayout";
import { useAuth } from "../context/contextAuth";
import { doSignOut } from "../firebase/firebase_login";
import Tarot_random from "./Tarot_random";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { hostname } from "../config";

function Home() {
  const { currentUser } = useAuth()
  const [user_role, setRole] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    if(currentUser) {
      axios.post(hostname+'/auth/user',{email:currentUser.email})
      .then((result)=>{
          setRole(result.data[0].role);
      })
    }
  },[])
  return (
    <UserLayout>
      <div className="container mx-auto">
      {currentUser && user_role === "admin" &&(
        navigate("/updatetarot")
      )}
      <h1 className="text-center text-white">ดูดวงด้วยไพ่ทาโร่</h1>
        {currentUser && <p>สวัสดี!! คุณ "{currentUser.displayName}"</p>}      
        <div className="mx-auto">
        <p className="text-white max-w-prose text-center mx-auto">เราเป็นกลุ่มเด็กไอทีที่รักการเขียนโค้ดไม่แพ้การเช็กดวง! ที่นี่คุณจะได้สัมผัสการดูดวงในแบบที่ไม่เหมือนใคร เพราะเราผสานศาสตร์แห่งดวงดาวกับเทคโนโลยีสุดล้ำ ไม่ว่าคุณจะเป็นสายมู สายเทค หรือสายชิลล์ ก็สามารถเช็กดวงง่าย ๆ ได้ทุกที่ทุกเวลา เพียงแค่ปลายนิ้ว ไม่ต้องพกยันต์หรือหมุนลูกเต๋าให้วุ่นวาย แค่คลิกเดียวก็รู้ได้เลยว่าวันนี้ดวงปังหรือพัง!</p>
          </div>   
      <Tarot_random/>
      <div className="max-w-prose mx-auto space-y-7 text-white my-5">
        {currentUser && user_role && (
          <div className="flex justify-center">
          {/* <button onClick={() => { doSignOut().then(() => { <Link to="/"></Link> }) }} 
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Logout
            </button> */}
        </div>
        )}
      </div>
        </div>
    </UserLayout>
  );
}

export default Home;