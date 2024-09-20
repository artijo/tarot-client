import UserLayout from "../Layouts/userLayout";
import HeroBg from "../assets/img/bg-hero.webp";
function Home() {
  return (
    <UserLayout>
      <div className="max-w-prose mx-auto space-y-7">
        <h1 className="text-center">Tarot By DekIT</h1>
        <p>เราเป็นกลุ่มเด็กไอทีที่รักการเขียนโค้ดไม่แพ้การเช็กดวง! ที่นี่คุณจะได้สัมผัสการดูดวงในแบบที่ไม่เหมือนใคร เพราะเราผสานศาสตร์แห่งดวงดาวกับเทคโนโลยีสุดล้ำ ไม่ว่าคุณจะเป็นสายมู สายเทค หรือสายชิลล์ ก็สามารถเช็กดวงง่าย ๆ ได้ทุกที่ทุกเวลา เพียงแค่ปลายนิ้ว ไม่ต้องพกยันต์หรือหมุนลูกเต๋าให้วุ่นวาย แค่คลิกเดียวก็รู้ได้เลยว่าวันนี้ดวงปังหรือพัง!</p>
      </div>
    </UserLayout>
  );
}

export default Home;