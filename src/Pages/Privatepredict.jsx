import { useEffect, useState } from "react";
import UserLayout from "../Layouts/userLayout";
import axios from "axios";
import { useAuth } from "../context/contextAuth";
import { useNavigate } from "react-router-dom";
import { hostname } from "../config";


function Pirvatepredict(){
    const { currentUser } = useAuth()
    const navigate = useNavigate();
    const [question,setquestion] = useState(null)
    const [ans,setans] = useState(null)
    function handleSubmit(e){
        e.preventDefault();
        axios.post(hostname+'/private/insertquestion',
            {question:question,email:currentUser.email} )
            .then((result)=>{
                setquestion("")
                alert("ส่งคำถามเรียบร้อย")
            })
            .catch((error)=>{
                console.log(error)
            }
        )
    }

    function getAns(){
        axios.post(hostname+'/private/getAll',
            {email:currentUser.email}

        )
            .then((result)=>{
                const ans = result.data.massage[0].asn
                if(ans== ""){
                    setans("ยังไม่ตอบค่ะ")
                }else{
                    setans(ans)
                }
            })
    }
    useEffect(()=>{
        if(!currentUser){
            navigate("/login")
        }
    }
    ,[])
   
    return(
        <UserLayout>
            <div className="container mx-auto">
            <h1 className="text-white text-center">ดูดวงส่วนตัว</h1>
            <h1 className="text-white">สวัสดี คุณ {currentUser && <span className="text-white">{currentUser.displayName}</span>}</h1>
            <span className="text-white">พิมพ์คำถาม</span>
            <p className="text-white"><span className="text-red-700">* </span>การดูดวงส่วนมีระยะเวลาในการดูอาจจะต้องรอ2-3 วัน</p>
            <form>
                <textarea onChange={(e)=>{setquestion(e.target.value)}} value={question} className="w-full sm:w-1/2 h-56"></textarea> <br></br>
                <input type="submit" value="ส่งคำทำนาย" onClick={handleSubmit} className="bg-green-600 rounded-[5px] p-4 text-white hover:bg-green-700"></input>
            </form>
            <p className="text-white mt-[10px]">คำทำนาย</p>
            <p className="text-white mt-[10px]">
                {
                    ans ? `${ans}` : ans
                }
            </p>
            <div className="text-white">
                <button onClick={getAns}>อ่านคำทำนาย</button>
            </div>
            </div>
        </UserLayout>
    )
}
export default Pirvatepredict;