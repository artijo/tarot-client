import UserLayout from "../Layouts/userLayout";
import { useAuth } from "../context/contextAuth";
import { doSignOut } from "../authen/firebase_login";

function Home() {
  const { currentUser } = useAuth()
  return (
    <UserLayout>
      <div className="max-w-prose mx-auto space-y-7 text-white">
        <h1 className="text-center">Tarot By DekIT</h1>        
        <p>เราเป็นกลุ่มเด็กไอทีที่รักการเขียนโค้ดไม่แพ้การเช็กดวง! ที่นี่คุณจะได้สัมผัสการดูดวงในแบบที่ไม่เหมือนใคร เพราะเราผสานศาสตร์แห่งดวงดาวกับเทคโนโลยีสุดล้ำ ไม่ว่าคุณจะเป็นสายมู สายเทค หรือสายชิลล์ ก็สามารถเช็กดวงง่าย ๆ ได้ทุกที่ทุกเวลา เพียงแค่ปลายนิ้ว ไม่ต้องพกยันต์หรือหมุนลูกเต๋าให้วุ่นวาย แค่คลิกเดียวก็รู้ได้เลยว่าวันนี้ดวงปังหรือพัง!</p>
        {currentUser && <p>{currentUser.displayName}</p>} 
        {currentUser && <button onClick={() => { doSignOut().then(() => { navigate('/') }) }} className='text-sm text-blue-600 underline'>Logout</button>}
      </div>
    </UserLayout>
  );
}

export default Home;