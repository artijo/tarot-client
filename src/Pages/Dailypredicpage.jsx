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
      {/* <p className="bg-white">hello</p> */}
      {/* {dailydata ? (
        ""
      ) : (
        <Button
          className="block mx-auto"
          variant="secondary"
          onClick={Dailyprediction}
        >
          ทำนาย
        </Button>
      )} */}
      {loading && (
        <div className="card max-w-prose mx-auto mt-4 bg-white p-6 rounded-md">
          <img src={rings} alt="rings" className="mx-auto" />
          <p className="text-center">กำลังทำนาย...</p>
        </div>
      )}
      {dailydata && loading == false && (<div className="bg-white flex justify-center">{dailydata.length!==0 ? (dailydata[0].prediction):("No data right now") }</div>)}

    </UserLayout>
  );
}

export default Dailypredicpage;
