// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import UserLayout from "../Layouts/userLayout";
import axios from "axios";

function Tarot_random() {
    const [card, setCard] = useState({});
    const [cardDraw, setCardDraw] = useState([]);
    const [excludeNumbers, setExcludeNumbers] = useState([]);
    const baseURL = "http://localhost:3000/randomTarot";


    // const callApi = async () => {
    //     await axios.get(`${baseURL}`)
    //     .then((res) => {
    //         setCard(res.data);
    //         setCardDraw([
    //             ...cardDraw,
    //             res.data
    //         ]);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // };


    const callApi = async () => {
        await axios.post(`${baseURL}/randomPost`,{excludeNumbers: [...excludeNumbers]})
        .then((res) => {
            setCard(res.data);
            setCardDraw([
                ...cardDraw,
                res.data
            ]);
            setExcludeNumbers([
                ...excludeNumbers,
                res.data.number
            ])
        })
        .catch((error) => {
            console.log(error);
        });
    };



    useEffect(() => {
        callApi();
    }, []);

    return (
        <UserLayout>
            <div className="flex gap-5">
                <div className="card w-[60%] border p-5 rounded-3xl flex gap-6 h-fit">
                    <img className="h-72 object-cover rounded-xl" src={`${baseURL}/tarotCardImage/${card.img}`} alt={card.name}/>
                    <div className="card-body border bg-white p-5 rounded-xl">
                        <p>{card.name}</p>
                        <div className="description">
                            <p>ความหมาย</p>
                            <p> 
                                {card.meta_description}
                            </p>
                        </div>
                
                    </div>
                </div>
                <div className="w-[25%]">
                    <button onClick={callApi} className="border h-fit w-full py-2 bg-white rounded-xl">สุ่ม</button>
                    <div className="cardStack grid grid-cols-3 place-items-center mt-5">
                        {cardDraw.map((card, index) => (
                            <div key={index}>
                                <img src={`${baseURL}/tarotCardImage/${card.img}`} alt={card.name} className="w-full h-full p-2"/>
                            </div>
                        ))}
                    </div>
                </div>
            
            </div>
        </UserLayout>
    );
}

export default Tarot_random;
