import LoginLayout from "../Layouts/loginLayout";
import { Link } from "react-router-dom";

function Register(){
    return (
        <LoginLayout>
            <div className="flex items-center justify-center pt-5">
                <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 border-2 w-full max-w-5xl">
                    <div className="text-center mb-4 font-bold">
                        สมัครสมาชิก
                    </div>
                    <div className="mb-4">
                        <label class="block text-gray-700 text-xl font-bold mb-1" for="username">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="username" type="text" placeholder="Username" />
                    </div>

                    <div className="mb-4">
                        <label class="block text-gray-700 text-xl font-bold mb-1" for="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="password" type="password" placeholder="Password" />
                    </div>

                    <div className="mb-4">
                        <label class="block text-gray-700 text-xl font-bold mb-1" for="birthdate">
                            Birth Date
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="birthdate" type="date" placeholder="Date of Birth" />
                    </div>

                    <div className="mb-4">
                        <label class="block text-gray-700 text-xl font-bold mb-1" for="e-mail">
                            E-mail
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="e-mail" type="text" placeholder="E-mail" />
                    </div>

                    <div className="mb-6">
                        <label class="block text-gray-700 text-xl font-bold mb-1" for="phonenumber">
                            Phone Number
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="phonenumber" type="text" placeholder="Phone Number" />
                    </div>

                    <div className="flex items-center justify-between flex-col">
                        <Link to="/" className="w-full">
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5 w-full" 
                            type="button">
                                สมัครสมาชิก
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </LoginLayout>
    );
}

export default Register;