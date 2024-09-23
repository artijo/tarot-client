import { Link } from "react-router-dom";
import UserLayout from "../Layouts/userLayout";

function Tarot_daily() {
  const weeklylist = [
    { name: "วันอาทิตย์" },
    { name: "วันจันทร์" },
    { name: "วันอังคาร" },
    { name: "วันพุธ" },
    { name: "วันพฤหัสบดี" },
    { name: "วันศุกร์" },
    { name: "วันเสาร์" },
  ];
  console.log(weeklylist);
  return (
    <UserLayout>
      <div className="mb-10 bt-0">
        <h2 className="flex justify-center">ดวงรายวันตามวันเกิด</h2>
      </div>

      <div className="flex justify-between">
        {weeklylist.map((day, index) => (
         
            <Link
              key={index}
              to={"/"}
              className="text-center border border-1 rounded-full p-10 bg-red-400"
            >
              {day.name}
            </Link>
          
        ))}
      </div>
    </UserLayout>
  );
}

export default Tarot_daily;
