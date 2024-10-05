import { Link } from "react-router-dom";
import UserLayout from "../Layouts/userLayout";
import { useLocation } from 'react-router-dom';
function Tarot_daily() {
  const weeklylist = [
    {
      name: "วันอาทิตย์",class:"bg-[#f14c4c]",link: "/dailypage?Sunday",
    },
    {
      name: "วันจันทร์",class:"bg-[#ffeb3b]",link: "/dailypage?Monday",
    },
    {
      name: "วันอังคาร",class:"bg-[#ee80b5]",link: "/dailypage?Tuesday",
    },
    {
      name: "วันพุธ",class:"bg-[#8DBC51]",link: "/dailypage?Wendesday",
    },
    {
      name: "วันพฤหัสบดี",class:"bg-[#FC8950]",link: "/dailypage?Thursday",
    },
    {
      name: "วันศุกร์",class:"bg-[#96C6FC]",link: "/dailypage?Friday",
    },
    {
      name: "วันเสาร์",class:"bg-[#B47AE7] col-start-2",link: "/dailypage?Saturday",
    },
  ];
  // console.log(weeklylist);
  const location = useLocation()
  // console.log(location);
  return (
    <UserLayout>
      <div className="mb-10 bt-0">
        <h2 className="flex justify-center text-white">ดวงรายวันตามวันเกิด</h2>
      </div>

      <div className="grid grid-cols-3 gap-14 mx-44">
        {weeklylist.map((day, index) =>
          
            <Link key={index} to={day.link} className={day.class +" text-center border border-1 rounded-full mx-auto w-48 h-48 py-20 text-xl"}>
              {day.name}
            </Link>
          
        )}
      </div>
    </UserLayout>
  );
}

export default Tarot_daily;