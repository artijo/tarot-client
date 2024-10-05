import { Link } from "react-router-dom";
import UserLayout from "../Layouts/userLayout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { hostname } from "../config";
import rings from "../assets/icons/rings.svg";

function Dailypredicpage() {
  const [dailydata, setDailydata] = useState(null);
  const [loading, setLoading] = useState(false);

  const Dailyprediction = async () => {
    setLoading(true);
    await axios
      .get(`${hostname}/daily/predicdaily`)
      .then((res) => {
        console.log(res.data);
        setDailydata(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };
  return (
    <UserLayout>
      <p className="bg-white">hello</p>
      {dailydata ? (
        ""
      ) : (
        <Button
          className="block mx-auto"
          variant="secondary"
          onClick={Dailyprediction}
        >
          ทำนาย
        </Button>
      )}
      {loading && (
        <div className="card max-w-prose mx-auto mt-4 bg-white p-6 rounded-md">
          <img src={rings} alt="rings" className="mx-auto" />
          <p className="text-center">กำลังทำนาย...</p>
        </div>
      )}
      {dailydata && loading == false && (<p>{dailydata.prediction}</p>)}

    </UserLayout>
  );
}

export default Dailypredicpage;
