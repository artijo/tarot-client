import { Link } from "react-router-dom";
import UserLayout from "../Layouts/userLayout";
import { useEffect,useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { hostname } from "../config";
import rings from "../assets/icons/rings.svg";
import { useLocation } from 'react-router-dom';

function Dailypredicpage() {
  const [dailydata, setDailydata] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation()
  let datename = location.search.split('?')[1]
  const Dailyprediction = async () => {
    setLoading(true);
    await axios
      .post(`${hostname}/daily/predicdaily/${datename}`)
      .then((res) => {
        console.log(res.data);
        setDailydata(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(()=>{
    Dailyprediction()
  },[])

  return (
    <UserLayout>
     
      {loading && (
        <div className="card max-w-prose mx-auto mt-4 bg-white p-6 rounded-md">
          <img src={rings} alt="rings" className="mx-auto" />
          <p className="text-center">กำลังทำนาย...</p>
        </div>
      )}
      {dailydata && loading == false && (<div>{dailydata.length!==0 ? (
                <div className="card max-w-prose mx-auto mt-4 bg-white p-6 rounded-md">
        <h2 className="text-center">ผลคำทำนายคนที่เกิด{datename == "Sunday" ? ("วันอาทิตย์"):(datename == "Monday") ? ("วันจันทร์"):(datename == "Tuesday") ? ("วันอังคาร"):(datename == "Wendesday") ? ("วันพุธ"):(datename == "Thursday") ? ("วันพฤหัสบิดี"):(datename == "Friday") ? ("วันศุกร์"):(datename == "Saturday") ? ("วันเสาร์"):("")}</h2>
        <p className="text-sm">ผลคำทำนายนี้ อาจจะไม่ตรงกับความเชื่อของท่าน และเป็นเพียงการทำนายเท่านั้น ไม่สามารถใช้เพื่อการตัดสินใจในเรื่องใดๆ ทั้งสิ้น โปรดใช้วิจารณญาณในการตัดสินใจในเรื่องที่สำคัญ</p>
                    <h3>ความรัก</h3>
                    <p><strong>สำหรับคนโสด </strong>{dailydata[0].prediction.love.single}</p>
                    <p><strong>สำหรับคนมีคู่ </strong>{dailydata[0].prediction.love.loveCouples}</p>

                    <h3>การงาน</h3>
                    <p>{dailydata[0].prediction.career}</p>

                    <h3>การเงิน</h3>
                    <p>{dailydata[0].prediction.finance}</p>

                    <h3>การเรียน</h3>
                    <p>{dailydata[0].prediction.education}</p>

                    <h3>สุขภาพ</h3>
                    <p>{dailydata[0].prediction.health}</p>

                    <h3>การเดินทาง</h3>
                    <p>{dailydata[0].prediction.travelLuck}</p>
              </div>
                ):(<div className="card max-w-prose mx-auto mt-4 bg-white p-6 rounded-md">
                  <h3 className="text-center">ยังไม่มีคำทำนายของคนที่เกิด{datename == "Sunday" ? ("วันอาทิตย์"):(datename == "Monday") ? ("วันจันทร์"):(datename == "Tuesday") ? ("วันอังคาร"):(datename == "Wendesday") ? ("วันพุธ"):(datename == "Thursday") ? ("วันพฤหัสบิดี"):(datename == "Friday") ? ("วันศุกร์"):(datename == "Saturday") ? ("วันศุกร์"):("")}ในตอนนี้</h3>
                </div>) }</div>)}

    </UserLayout>
  );
}

export default Dailypredicpage;
