import axios from "axios";
import { useState } from "react"

function AnswerPredict(){
    const [answer,setanswer] = useState(null)
    const [q ,setq] = useState(null)

    function handlersummit(e){
        e.preventDefault();
        axios.post('http://localhost:3000/private/insertans',
            {answer:answer}
        )
    }
    function getAns(){
        axios.get('http://localhost:3000/private/getAll')
            .then((result)=>{
                setq(result.data)
               console.log(result.data)
            })
        
    }

    return(
        <>
            <h1>สวัสดี หมอดู</h1>
            
            <div>
                <h3>คำถาม</h3>
                
                    {q &&
                    q.map((item,index)=>{
                        item.massage.map((i,q)=>{
                            <div key={i}>
                                {q.question}
                            </div>
                        })
                    })
                    }


            </div>
            <br></br>
            <form>
                <p>เขียนคำทำนาย</p>
                <input type="text" onChange={(e)=>{setanswer(e.target.value)}} className="border-solid border-2 border-indigo-600 "></input>
                <br></br>
                <input type="submit" value="ส่งคำทำนาย" onClick={handlersummit}></input>
            </form>

        </>
    )
}
export default AnswerPredict;