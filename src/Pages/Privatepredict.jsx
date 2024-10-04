import { useEffect, useState } from "react";
import UserLayout from "../Layouts/userLayout";
import axios from "axios";

function Pirvatepredict(){
    const [question,setquestion] = useState(null)
    const [ans,setans] = useState(null)
    function handleSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:3000/private/insertquestion',
            {question:question} )
            console.log("question"+question)
    }
    function getAns(){
        axios.get('http://localhost:3000/private/getAll')
            .then((result)=>{
                setans(result.data)
               console.log(result.data)
            })
        
    }
    useEffect(()=>{
        getAns()
       
    },[])
    return(
        <UserLayout>
            <h1 className="text-white text-center">ดูดวงส่วนตัว</h1>
            <span className="text-white">พิมพ์คำถาม</span>
            <p className="text-white"><span className="text-red-700">* </span>การดูดวงส่วนมีระยะเวลาในการดูอาจจะต้องรอ2-3 วัน</p>
            <form>
                <textarea onChange={(e)=>{setquestion(e.target.value)}} className="w-1/2 h-[100px]"></textarea> <br></br>
                <input type="submit" value="ส่งคำทำนาย" onClick={handleSubmit} className="bg-green-600 rounded-[5px] text-white p-[2px] mt-[10px] ml-[598px]"></input>
            </form>
            <p className="text-white mt-[10px]">คำทำนาย</p>
            <div className="text-white">
              { ans && 
                ans.map((item,index)=>(
                    item.massage.map((data,i)=>(
                        <div key={i}>
                            {data.ans}
                        </div>
                    ))
                    
                ))
              }
            </div>
        </UserLayout>
    )
}
export default Pirvatepredict;