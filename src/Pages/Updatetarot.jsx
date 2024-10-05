import { useEffect, useState } from "react";
import UserLayout from "../Layouts/userLayout";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../context/contextAuth";
import { doSignOut } from "../firebase/firebase_login";

function UpdateTarot(){
    const nav = [{name:"ดูดวงส่วนตัว",link:'/'}]
    const { currentUser } = useAuth()
    const [user_role, setRole] = useState(null)
    async function getUser() {
            await axios.post('http://localhost:3000/auth/user',{email:currentUser.email})
                    .then((result)=>{
                        setRole(result.data[0].role);
                    })
        }
    useEffect(()=>{
        getUser()
    },[])
    if(user_role === "admin"){
        return(
            //Something here admin function
            <>
                <p>Hello Admin</p>
            </>
        )
    }
    else{
        return(
            setTimeout(()=>{
                doSignOut().then(() => { window.location.href = "/" })
            },1000),
            alert("You are not Admin... Logging Out")
        )
    }
}
export default UpdateTarot;