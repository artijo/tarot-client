import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../context/contextAuth";
import { hostname } from "../config";
import AdminLayout from "../Layouts/adminLayout";

function AnswerPredict() {
    const { currentUser } = useAuth();
    const [answer, setAnswer] = useState("");
    const [q, setQ] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        axios.post(hostname+'/private/insertans', {
            answer: answer,
            email: currentUser.email
        })
        .then(() => {
            setAnswer(""); // Clear the input after submission
        })
        .catch((error) => {
            console.error("Error sending answer:", error);
        });
    }

    function getQuestion() {
        axios.post(hostname+'/private/getAll', {
            email: currentUser.email
        })
        .then((result) => {
            const question = result.data.massage[0]?.question; // Use optional chaining
            if (!question || question === "") {
                setQ("คุณยังไม่ได้ถามเลย");
            } else {
                setQ(question);
            }
        })
        .catch((error) => {
            console.error("Error fetching question:", error);
        });
    }

    return (
        <AdminLayout>
              <button 
                    onClick={getQuestion} 
                    className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-200"
                >
                    อ่านคำถาม
                </button>
                <div className="bg-slate-100 rounded-[5px] p-[5px] m-[10px] w-1/2 h-[100px]">
                    {q}
                </div>
                <form className="w-full max-w-md" onSubmit={handleSubmit}>
                <label className="block text-sm font-medium text-white" htmlFor="answer">เขียนคำทำนาย</label>
                <input 
                    id="answer"
                    type="text" 
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)} 
                    className="mt-2 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    required
                />
                <input 
                    type="submit" 
                    value="ส่งคำทำนาย" 
                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-200 cursor-pointer"
                />
            </form>
        </AdminLayout>
       
    );
}

export default AnswerPredict;
