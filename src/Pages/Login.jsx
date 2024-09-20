import UserLayout from "../Layouts/userLayout";
import { Link } from "react-router-dom";

function Login() {
    return (
        <UserLayout>
            <div class="max-w-4xl mx-auto">
                <form class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                    <div class="text-center mb-4 font-bold">
                        เข้าสู่ระบบ
                    </div>
                    <div class="mb-4">
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="username" type="text" placeholder="Username" />
                    </div>

                    <div class="mb-6">
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="password" type="password" placeholder="Password" />
                    </div>

                    <div class="flex items-center justify-between flex-col">
                        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5 w-full" 
                        type="button">
                            เข้าสู่ระบบ
                        </button>
                        <h3 class="flex items-center w-full mb-2">
                            <span class="flex-grow bg-gray-200 rounded h-1"></span>
                            <span class="mx-3 text-lg font-medium">หรือ</span>
                            <span class="flex-grow bg-gray-200 rounded h-1"></span>
                        </h3>
                        <Link to="/register" class="w-full">
                            <button class="bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5 w-full" 
                                type="button">
                                    สมัครสมาชิก
                            </button>
                        </Link>
                        <a href="/" class="w-full">
                            <button class="bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5 w-full" 
                            type="button">
                                ลืมรหัสผ่าน
                            </button>
                        </a>
                    </div>
                </form>
            </div>
        </UserLayout>
    );
}

export default Login;