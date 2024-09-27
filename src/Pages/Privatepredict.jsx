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
            <h1>ดูดวงส่วนตัว</h1>
            <span>พิมพ์คำถาม</span>
            <p><span>*</span>การดูดวงส่วนมีระยะเวลาในการดูอาจจะต้องรอ2-3 วัน</p>
            <form>
                <textarea onChange={(e)=>{setquestion(e.target.value)}}></textarea>
                <input type="submit" value="ส่งคำทำนาย" onClick={handleSubmit}></input>
            </form>
            <p>คำทำนาย</p>
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