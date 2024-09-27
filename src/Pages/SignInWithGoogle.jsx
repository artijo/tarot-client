import LoginLayout from "../Layouts/loginLayout";
import { Link,Navigate } from "react-router-dom";
import { doSignInWithGoogle } from "../authen/firebase_login";
import React,{ useState } from "react";
import { useAuth } from "../context/contextAuth";

const SingInWithGoogle = () =>{
    const { userLoggedIn } = useAuth();
    const { currentUser } = useAuth();
    const [isSigningIn, setIsSigningIn] = useState(false)

    const onGoogleSignIn = async(e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            doSignInWithGoogle()
            .catch(err => {
                setIsSigningIn(false)
            })
        }
    }
    return (
        <LoginLayout>
            { userLoggedIn && (
                currentUser.email == "pheeraphon.j@kkumail.com" ? 
                    <Navigate to="/updatetarot"></Navigate>
                    :
                    <Navigate to="/"></Navigate>
                )}
            <div className="max-w-prose mx-auto">
                <div className="flex item-center justify-center">
                    <button type="button" 
                        onClick={(e) => { onGoogleSignIn(e) }}
                        className="text-white bg-[#ef4444] hover:bg-[#450a0a]/90 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
                        <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                            <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
                        </svg>
                        {isSigningIn ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบด้วย Google'}
                    </button>
                </div>
            </div>
        </LoginLayout>
    )
}

export default SingInWithGoogle;