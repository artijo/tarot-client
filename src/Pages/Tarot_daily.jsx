import { Link } from "react-router-dom";
import UserLayout from "../Layouts/userLayout";

function Tarot_daily() {
  const weeklylist = [
    {
      name: "วันอาทิตย์",
      class:
        "bg-[#f14c4c]",
      link: "/dailypage",
    },
    {
      name: "วันจันทร์",
      class:
        "bg-[#ffeb3b]",
      link: "/dailypage",
    },
    {
      name: "วันอังคาร",
      class:
        "bg-[#ee80b5]",
      link: "/dailypage",
    },
    {
      name: "วันพุธ",
      class:
        "bg-[#8DBC51]",
      link: "/dailypage",
    },
    {
      name: "วันพฤหัสบดี",
      class:
        "bg-[#FC8950]",
      link: "/dailypage",
    },
    {
      name: "วันศุกร์",
      class:
        "bg-[#96C6FC]",
      link: "/dailypage",
    },
    {
      name: "วันเสาร์",
      class:
        "bg-[#B47AE7] col-start-2",
      link: "/dailypage",
    },
  ];
  // console.log(weeklylist);
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