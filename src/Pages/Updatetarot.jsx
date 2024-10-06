import { useEffect, useState } from "react";
import UserLayout from "../Layouts/userLayout";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../context/contextAuth";
import { doSignOut } from "../firebase/firebase_login";
import { useNavigate } from "react-router-dom";
import { hostname } from "../config";
import AdminLayout from "../Layouts/adminLayout";

function UpdateTarot(){
    const nav = [{name:"ดูดวงส่วนตัว",link:'/'}]
    const { currentUser } = useAuth()
    const [user_role, setRole] = useState(null)
    const navigate = useNavigate()
    async function getUser() {
            await axios.post(hostname+'/auth/user',{email:currentUser.email})
                    .then((result)=>{
                        setRole(result.data[0].role);
                        console.log(result.data[0])
                    })
        }
    if(currentUser){
        useEffect(()=>{
            getUser()
        },[])
    }
    if(user_role === "admin"){
        return(
            //Something here admin function
            <AdminLayout>
                  
                <p className="text-white">Hello Admin</p>
                
              
              <p>
              <button onClick={() => { doSignOut().then(() => { navigate("/") }) }} 
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Logout
              </button>
              </p>  
            </AdminLayout>
        )
    }
    if(user_role === "user"){
        return(
            alert("You are not Admin... Logging Out"),
            doSignOut().then(() => { window.location.href = "/" })
        )
    }
    if(!currentUser){
        window.location.href = "/"
    }
}
export default UpdateTarot;