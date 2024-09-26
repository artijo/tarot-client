import { useEffect, useState } from "react";
import UserLayout from "../Layouts/userLayout";
import axios from "axios";

function UpdateTarot(){
    
    const [predict,setprdict] =useState(null)
    const [predictDetail,setpredictDetail] =useState(null)

    function handleSubmit(e){
        e.preventDefault();
        axios.put('http://localhost:3000/updatepredict',
            {   predict: predict, 
                predictDetail: predictDetail
            }    
        )

        console.log(predict,predictDetail)
    }
    return(
        <UserLayout>
            <h1>Hello Admin</h1>
            <form>
                <select id="predict" onChange={(e)=>{setprdict(e.target.value)}}>
                <option id="0" >เลือกหมวดหมู่</option>
                    <option id="1" value="tarotdaily_birthday">ดูดวงรายวัน ตามวันเกิด(อา.-ส.)</option>
                    <option id="2" value="tarotweekly_zodiac">ดูดวงรายสัปดาห์ ตามราศี</option>
                    <option id="3" value="สีมงคล">สีมงคล</option>
                </select> <br></br>
                {predict=="tarotdaily_birthday" ?
                ( <>
                    <input type="radio" value="Monday"></input>
                   <input type="radio" value="Tuesday"></input>
                   <input type="radio" value="WednesDay"></input>
                   <input type="radio" value="Thursday"></input>
                   <input type="radio" value="Friday"></input>
                   <input type="radio" value="Saturday"></input>
                   <input type="radio" value="Sunday"></input>
                    </>
                ):(<></>)}
                <textarea onChange={(e)=>{setpredictDetail(e.target.value)}}></textarea>
                <input type="submit" value="ยืนยัน" onClick={handleSubmit}/>
            </form>
        </UserLayout>
    )


}
export default UpdateTarot;