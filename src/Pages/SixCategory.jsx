import axios from "axios";
import UserLayout from "../Layouts/userLayout";
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import { hostname } from "../config";
import rings from "../assets/icons/rings.svg";

function SixCategory() {
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);

    const Prediction = async () => {
        setLoading(true)
        await axios.get(`${hostname}/sixCategory/prediction`)
            .then((res) => {
                setPrediction(res.data)
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
        setTimeout(() => {
            setLoading(false)
        }, 5000);
    }

  return (
    <UserLayout>
      <h1 className="text-center text-white">คำทำนาย 6 หมวดหมู่ รายวัน</h1>
      <p className="max-w-prose mx-auto mt-4 text-white">
        คำทำนาย 6 หมวดหมู่ รายวัน คือ การทำนายที่เกี่ยวกับ 6 หมวดหมู่ คือ การงาน การเงิน ความรัก ครอบครัว สุขภาพ และเส้นทางชีวิต โดยจะทำนายยทุกหมวดหมู่ ในแต่ละวัน โปรดตั้งจิตใจให้สงบ แล้วกดปุ่ม "ทำนาย" แล้วรอผลการทำนาย
      </p>

      {
        prediction ? (
            <Button className="block mx-auto"variant="secondary" disabled>ทำนาย</Button>
        ):(
            <Button className="block mx-auto" variant="secondary" onClick={Prediction}>ทำนาย</Button>
        )
      }



    {loading && (
        <div className="card max-w-prose mx-auto mt-4 bg-white p-6 rounded-md">
            <img src={rings} alt="rings" className="mx-auto"/>
            <p className="text-center">กำลังทำนาย...</p>
        </div>
    )}
        {
            prediction && loading == false &&(
                <div className="card max-w-prose mx-auto mt-4 bg-white p-6 rounded-md">
        <h2 className="text-center">ผลคำทำนาย</h2>
        <p className="text-sm">ผลคำทำนายนี้ อาจจะไม่ตรงกับความเชื่อของท่าน และเป็นเพียงการทำนายเท่านั้น ไม่สามารถใช้เพื่อการตัดสินใจในเรื่องใดๆ ทั้งสิ้น โปรดใช้วิจารณญาณในการตัดสินใจในเรื่องที่สำคัญ</p>
                    <h3>ความรัก</h3>
                    <p><strong>สำหรับคนโสด </strong>{prediction.love.single}</p>
                    <p><strong>สำหรับคนมีคู่ </strong>{prediction.love.loveCouples}</p>

                    <h3>การงาน</h3>
                    <p>{prediction.career}</p>

                    <h3>การเงิน</h3>
                    <p>{prediction.finance}</p>

                    <h3>การเรียน</h3>
                    <p>{prediction.education}</p>

                    <h3>สุขภาพ</h3>
                    <p>{prediction.health}</p>

                    <h3>การเดินทาง</h3>
                    <p>{prediction.travelLuck}</p>
              </div>
                )
            }
    </UserLayout>
  );
}

export default SixCategory;