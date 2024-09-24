import { Link } from "react-router-dom";
import UserLayout from "../Layouts/userLayout";

function Tarot_daily() {
  const weeklylist = [
    {
      name: "วันอาทิตย์",
      class:
        "text-center border border-1 rounded-full bg-[#f14c4c] w-36 h-36 pt-14",
      link: "/",
    },
    {
      name: "วันจันทร์",
      class:
        "text-center border border-1 rounded-full bg-[#ffeb3b] w-36 h-36 pt-14",
      link: "/",
    },
    {
      name: "วันอังคาร",
      class:
        "text-center border border-1 rounded-full bg-[#ee80b5] w-36 h-36 pt-14",
      link: "/",
    },
    {
      name: "วันพุธ",
      class:
        "text-center border border-1 rounded-full bg-[#8DBC51] w-36 h-36 pt-14",
      link: "/",
    },
    {
      name: "วันพฤหัสบดี",
      class:
        "text-center border border-1 rounded-full bg-[#FC8950] w-36 h-36 pt-14",
      link: "/",
    },
    {
      name: "วันศุกร์",
      class:
        "text-center border border-1 rounded-full bg-[#96C6FC] w-36 h-36 pt-14",
      link: "/",
    },
    {
      name: "วันเสาร์",
      class:
        "text-center border border-1 rounded-full bg-[#B47AE7] w-36 h-36 pt-14 col-start-2",
      link: "/",
    },
  ];
  console.log(weeklylist);
  return (
    <UserLayout>
      <div className="mb-10 bt-0">
        <h2 className="flex justify-center">ดวงรายวันตามวันเกิด</h2>
      </div>

      <div className="grid grid-cols-3 gap-14 ">
        {weeklylist.map((day, index) =>
          
            <Link key={index} to={day.link} className={day.class +" mx-auto"}>
              {day.name}
            </Link>
          
        )}
      </div>
    </UserLayout>
  );
}

export default Tarot_daily;
