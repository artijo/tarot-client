import { useEffect, useState } from "react";
import UserLayout from "../Layouts/userLayout";
import axios from "axios";
import { useAuth } from "../context/contextAuth";
function Pirvatepredict(){
    const { currentUser } = useAuth()
    const [question,setquestion] = useState(null)
    const [ans,setans] = useState(null)
    console.log("user"+currentUser)
    function handleSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:3000/private/insertquestion',
            {question:question,email:currentUser.email} )
            console.log("question"+question)
    }

    function getAns(){
        axios.post('http://localhost:3000/private/getAll',
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
   
    return(
        <UserLayout>
            <h1 className="text-white text-center">ดูดวงส่วนตัว</h1>
            <h1 className="text-white">สวัสดี คุณ {currentUser && <span className="text-white">{currentUser.displayName}</span>}</h1>
            <span className="text-white">พิมพ์คำถาม</span>
            <p className="text-white"><span className="text-red-700">* </span>การดูดวงส่วนมีระยะเวลาในการดูอาจจะต้องรอ2-3 วัน</p>
            <form>
                <textarea onChange={(e)=>{setquestion(e.target.value)}} className="w-1/2 h-[100px]"></textarea> <br></br>
                <input type="submit" value="ส่งคำทำนาย" onClick={handleSubmit} className="bg-green-600 rounded-[5px] text-white p-[2px] mt-[10px] ml-[598px]"></input>
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
        </UserLayout>
    )
}
export default Pirvatepredict;