import LoginLayout from "../Layouts/loginLayout";
import { Link } from "react-router-dom";

function Login() {
    return (
        <LoginLayout>
            <div className="flex items-center justify-center pt-[105px]">
                <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 border-2 w-full max-w-5xl">
                    <div className="text-center mb-4 font-bold">
                        เข้าสู่ระบบ
                    </div>
                    <div className="mb-4">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="username" type="text" placeholder="Username" />
                    </div>

                    <div className="mb-6">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="password" type="password" placeholder="Password" />
                    </div>

                    <div className="flex items-center justify-between flex-col">
                        <Link to="/" className="w-full">
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5 w-full" 
                            type="button">
                                เข้าสู่ระบบ
                            </button>
                        </Link>
                        <h3 className="flex items-center w-full mb-2">
                            <span className="flex-grow bg-gray-200 rounded h-1"></span>
                            <span className="mx-3 text-lg font-medium">หรือ</span>
                            <span className="flex-grow bg-gray-200 rounded h-1"></span>
                        </h3>
                        <Link to="/register" className="w-full">
                            <button className="bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5 w-full" 
                                type="button">
                                    สมัครสมาชิก
                            </button>
                        </Link>
                        <a href="/" className="w-full">
                            <button className="bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5 w-full" 
                            type="button">
                                ลืมรหัสผ่าน
                            </button>
                        </a>
                    </div>
                </form>
            </div>
        </LoginLayout>
    );
}

export default Login;