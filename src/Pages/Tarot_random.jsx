// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import UserLayout from "../Layouts/userLayout";
import axios from "axios";
import { split } from "postcss/lib/list";


function Tarot_random(){
    const [card, setCard] = useState([]);
    const baseURL = "http://localhost:3000/randomTarot";
    const callApi =  async () => {
        await axios.get(baseURL)
        .then((res) => {
            setCard(res.data)
        })
        .catch((error) => {
            console.log(error)
        })

        // ${baseURL}/tarotCardImage/${card.img}}
        // await axios.get(`${baseURL}/tarotCardImage/img/deck/00_Fool.jpg`)
        // .then((res)=>{
        //     setImage(res.data)
        // })
        // .catch((error) => {
        //     console.log(error)
        // })
    }



    useEffect(() => {
        callApi()
    },[])

    return (
        <UserLayout>
            <div className="card">
                <img src={`${baseURL}/tarotCardImage/${card.img}`}/>
                <div className="card-body">
                    <h5>{card.name}</h5>
                    <p>{card.meta_description}</p>
                </div>
            </div>

        </UserLayout>
    )
}

export default Tarot_random;
