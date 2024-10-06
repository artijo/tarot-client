import axios from "axios";
import UserLayout from "../Layouts/userLayout";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { hostname } from "../config";

const zodiacNames = {
    CAPRICORNUS: "ราศีมังกร",
    AQUARIUS: "ราศีกุมภ์",
    PISCES: "ราศีมีน",
    ARIES: "ราศีเมษ",
    TAURUS: "ราศีพฤษภ",
    GEMINI: "ราศีเมถุน",
    CANCER: "ราศีกรกฎ",
    LEO: "ราศีสิงห์",
    VIRGO: "ราศีกันย์",
    LIBRA: "ราศีตุลย์",
    SCORPIO: "ราศีพิจิก",
    SAGITARIUS: "ราศีธนู",
  };

function ZodiacHroscope() {
    const [oracle, setOracle] = useState(null);
    const [loading, setLoading] = useState(false);

    const location = useLocation(); 
    const query = new URLSearchParams(location.search);
    const sign = query.get("sign"); 

    useEffect(() => {
        const fetchZodiac = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`${hostname}/horoscopeZodiac`);
                setOracle(res.data); 
            } catch (error) {
                console.error('Error fetching horoscope:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchZodiac();
    }, []);

   
    const formatDate = (dateStr) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric', locale: 'th-TH' };
        return new Date(dateStr).toLocaleDateString('th-TH', options);
    };

    return (
        <UserLayout>
            <h1 className="text-white text-4xl text-center mb-3">ดวง{sign && zodiacNames[sign.toUpperCase()] ? zodiacNames[sign.toUpperCase()] : "ราศี"}</h1>
            {oracle && (
                <h5 className="text-white text-center mb-4">
                    พยากรณ์ระหว่างวันที่ {formatDate(oracle.startdate)} - {formatDate(oracle.enddate)}
                </h5>
            )}
            <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 max-w-4xl mx-auto">

           
            <p className="max-w-prose mx-auto mt-4 text-[#010030]">
                {loading ? "Loading..." : oracle && sign ? (
                    <div>
                        <h6>{oracle[sign.toUpperCase()]}</h6>
                    </div>
                ) : "ไม่สามารถดึงข้อมูลได้"}
            </p>
            </div>
        </UserLayout>
    );
}

export default ZodiacHroscope;