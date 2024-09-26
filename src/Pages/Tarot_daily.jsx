import { Link } from "react-router-dom";
import UserLayout from "../Layouts/userLayout";

function Tarot_daily() {
  const weeklylist = [
    {
      name: "วันอาทิตย์",
      class:
        "bg-[#f14c4c]",
      link: "/",
    },
    {
      name: "วันจันทร์",
      class:
        "bg-[#ffeb3b]",
      link: "/",
    },
    {
      name: "วันอังคาร",
      class:
        "bg-[#ee80b5]",
      link: "/",
    },
    {
      name: "วันพุธ",
      class:
        "bg-[#8DBC51]",
      link: "/",
    },
    {
      name: "วันพฤหัสบดี",
      class:
        "bg-[#FC8950]",
      link: "/",
    },
    {
      name: "วันศุกร์",
      class:
        "bg-[#96C6FC]",
      link: "/",
    },
    {
      name: "วันเสาร์",
      class:
        "bg-[#B47AE7] col-start-2",
      link: "/",
    },
  ];
  console.log(weeklylist);
  return (
    <UserLayout>
      <div className="mb-10 bt-0">
        <h2 className="flex justify-center text-white">ดวงรายวันตามวันเกิด</h2>
        {currentUser && <p className="text-white">{currentUser.displayName}</p>}
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