import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from 'react';
import axios from "axios";

function tarotCard(){
    const [alreadyDraw, setAlreadyDraw] = useState([]);
    const [presentCard, setPresentCard] = useState([]);

    const baseURL = "http://localhost:3000/randomTarot/random";
    const tarotRandomCallAPI =  async () => {
        try{
            const response = await axios.get(`${baseURL}`);
            setPresentCard(response.data);
        }catch(error){
            console.log('error', error)
        }
    }

    useEffect(() => {
        tarotRandomCallAPI()
    }, [])

    return (
        <main className="min-h-screen bg-slate-100 antialiased relative lg:pt-[100px] pt-[90px] md:pt-[120px] pb-[125px] sm:pb-[90px]">
                <Header />
                <div className="container mx-auto">
                  {
                   presentCard.name + " " + presentCard.number
                  }
                </div>
                <Footer />
        </main>
    );
};

export default tarotCard;