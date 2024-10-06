import { useEffect, useState } from "react";
import UserLayout from "../Layouts/userLayout";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../context/contextAuth";
import { doSignOut } from "../firebase/firebase_login";
import { useNavigate } from "react-router-dom";
import { hostname } from "../config";
import AdminLayout from "../Layouts/adminLayout";

function UpdateTarot() {
    const nav = [{ name: "ดูดวงส่วนตัว", link: '/' }]
    const { currentUser } = useAuth()
    const [user_role, setRole] = useState(null)
    const navigate = useNavigate()
    async function getUser() {
        await axios.post(hostname + '/auth/user', { email: currentUser.email })
            .then((result) => {
                setRole(result.data[0].role);
                console.log(result.data[0])
            })
    }
    if (currentUser) {
        useEffect(() => {
            getUser()
        }, [])
    }

    if (user_role === "admin") {
        const helloadmin = [
            "ยินดีต้อนรับกลับสู่ระบบแพลตฟอร์มการทำนายของเราอีกครั้ง เราหวังว่าท่านจะมีวันที่ยอดเยี่ยมและพร้อมที่จะมอบความแม่นยำและความรู้สึกดี ๆ ให้แก่ผู้ที่มาขอคำทำนายจากท่านในวันนี้",
            "ขอให้ท่านได้รับพลังงานที่ดีและสามารถใช้ความสามารถของท่านได้อย่างเต็มที่เพื่อแนะนำทางเลือกและทำนายอนาคตให้กับลูกค้าของท่าน",
            "ทีมงานของเราพร้อมสนับสนุนท่านในทุกๆ ขั้นตอนหากท่านมีคำถามหรือข้อสงสัยใดๆสามารถติดต่อเราได้ทันที เราพร้อมให้ความช่วยเหลือท่านอย่างเต็มที่",
            "ขอให้วันนี้เป็นวันที่เต็มไปด้วยความสำเร็จและการทำนายที่น่าจดจำ!"
        ]
        const randomtexttoshow = helloadmin[Math.floor(Math.random()*helloadmin.length)]
        return (
            //Something here admin function
            <AdminLayout>

                <div className="card max-w-prose mx-auto mt-4 bg-white p-6 rounded-md text-start">
                    <p>สวัสดีท่านหมอดู "{currentUser.displayName}"!</p>
                    <p>{randomtexttoshow}</p>
                </div>
            </AdminLayout>
        )
    }
    if (user_role === "user") {
        return (
            alert("You are not Admin... Logging Out").then(() => { doSignOut() }).finally(() => {navigate('/')})
            // doSignOut().then(() => { window.location.href = "/" })
        )
    }
    if (!currentUser) {
        window.location.href = "/"
    }
}
export default UpdateTarot;