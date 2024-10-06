// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import UserLayout from "../Layouts/userLayout";
import axios from "axios";

function Tarot_random() {
    const [card, setCard] = useState(null);
    const [cardDraw, setCardDraw] = useState([]);
    const [excludeNumbers, setExcludeNumbers] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);
    const baseURL = "http://localhost:3000/randomTarot";

    const [borderColor, setBorderColor] = useState("rgb(255, 0, 0)");

    useEffect(() => {
        let r = 255;
        let g = 0;
        let b = 0;
        let step = 5;

        const interval = setInterval(() => {
            if (r === 255 && g < 255 && b === 0) {
                g += step; // Increase green
            } else if (g === 255 && r > 0 && b === 0) {
                r -= step; // Decrease red
            } else if (g === 255 && b < 255) {
                b += step; // Increase blue
            } else if (b === 255 && g > 0) {
                g -= step; // Decrease green
            } else if (b === 255 && r < 255) {
                r += step; // Increase red
            } else {
                b -= step; // Decrease blue
            }

            setBorderColor(`rgb(${r}, ${g}, ${b})`);
        }, 100); // Change color every 100ms

        return () => clearInterval(interval); // Clear interval on unmount
    }, []);


    const callApi = async () => {
        await axios.post(`${baseURL}/randomPost`,{excludeNumbers: [...excludeNumbers]})
        .then((res) => {
            setIsDisabled(true);
            setTimeout(() => {
                setIsDisabled(false);
                setCard(res.data);
                setCardDraw([
                    ...cardDraw,
                    res.data
                ]);
                setExcludeNumbers([
                    ...excludeNumbers,
                    res.data.number
                ])
            }, 1000);
        })
        .catch((error) => {
            console.log(error);
        });
    };


    useEffect(() => {
        callApi();
    }, []);

    return (
        <div>
            <div className="sm:flex gap-5 flex-col-reverse sm:flex-row mx-auto justify-center">
                <div className="card sm:w-[60%] border p-5 rounded-3xl flex flex-col sm:flex-row gap-6 h-fit">
                    {
                        card ?  (
                            <>
                                <img className="h-auto sm:h-72 object-cover rounded-xl" src={`${baseURL}/tarotCardImage/${card.img}`} alt={card.name}/>
                                <div className="card-body border bg-white p-5 rounded-xl">
                                    <p>{card.name}</p>
                                    <div className="description">
                                        <p>ความหมาย</p>
                                        <p> 
                                            {card.meta_description}
                                        </p>
                                    </div>
                                </div>
                            </>
                            
                        ) :  (
                            <div className="text-white">Loading....</div>
                        )
                    }
                    
                </div>
                <div className="sm:w-[25%] mt-4 sm:m-0">
                    <button onClick={callApi} style={{ backgroundColor: borderColor }} className={isDisabled ? "border h-fit w-full py-2 bg-gray-300 rounded-xl text-white"   :"border h-fit w-full py-2 bg-white rounded-xl"} disabled={isDisabled}>{isDisabled ? 'กำลังสุ่ม....' : 'สุ่ม'}</button>
                    <div className="cardStack grid grid-cols-3 place-items-center mt-5">
                        {cardDraw.map((card, index) => (
                            <div key={index}>
                                <img src={`${baseURL}/tarotCardImage/${card.img}`} alt={card.name} className="w-full h-full p-2"/>
                            </div>
                        ))}
                    </div>
                </div>
            
            </div>
        </div>
    );
}

export default Tarot_random;
