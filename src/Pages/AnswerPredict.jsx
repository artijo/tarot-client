import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../context/contextAuth";

function AnswerPredict() {
    const { currentUser } = useAuth();
    const [answer, setAnswer] = useState("");
    const [q, setQ] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:3000/private/insertans', {
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
        axios.post('http://localhost:3000/private/getAll', {
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
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">สวัสดี หมอดู</h1>
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">คำถาม</h3>
                <button 
                    onClick={getQuestion} 
                    className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-200"
                >
                    อ่านคำถาม
                </button>
                <div className="mt-4 p-4 border border-gray-300 rounded bg-white shadow">
                    {q}
                </div>
            </div>
            <form className="w-full max-w-md" onSubmit={handleSubmit}>
                <label className="block text-sm font-medium text-gray-700" htmlFor="answer">เขียนคำทำนาย</label>
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
        </div>
    );
}

export default AnswerPredict;
