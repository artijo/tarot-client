import { Link } from "react-router-dom";
import AdminLayout from "../Layouts/adminLayout";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { hostname } from "../config";
import rings from "../assets/icons/rings.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/contextAuth";

function CreateDailyPredict() {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(false);
    const [date,setDate] = useState(null);
    const [statusoutput, setStatusoutput] = useState(null)
    const setDatedata = async (event)=>{
        setDate(event.target.value)
    }

    const addpredicdailyfast = async () => {
        setLoading(true);
        await axios
            .post(`${hostname}/daily/addpredicdailyfast`, { date: date })
            .then((res) => {
                console.log(res.data);
                setStatus(true);
                setStatusoutput(res.data)
            })
            .catch((error) => {
                console.log(error);
            });
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

    async function isAdmin() {
        if (currentUser) {
            await axios.post(hostname + '/auth/user', { email: currentUser.email })
            .then((result) => {
                if (result.data[0].role !== "admin") {
                    alert("You are not Admin... Logging Out")
                    navigate('/profile')
                }
            })
        }
    }

    useEffect(() => {
        if (!currentUser) {
          navigate("/login");
        }
        isAdmin()
      }, []);

    return (
        <AdminLayout>

            <div className="card max-w-prose mx-auto mt-4 bg-white p-6 rounded-md">
                <input type="date" name="date" id="date" className="my-10" onChange={setDatedata}/><br />
                <Button onClick={addpredicdailyfast} className="block mx-auto">Get Predict</Button>
            </div>
            {loading && (
                <div className="card max-w-prose mx-auto mt-4 bg-white p-6 rounded-md">
                    <img src={rings} alt="rings" className="mx-auto" />
                    <p className="text-center">กำลังทำนาย...</p>
                </div>
            )}

            {
                status == true && loading == false && (<div className="card max-w-prose mx-auto mt-4 bg-white p-6 rounded-md">{
                    <h2 className="text-center">{statusoutput}</h2>
                }</div>)
            }

        </AdminLayout>
    )
}

export default CreateDailyPredict;