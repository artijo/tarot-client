import { useState, useEffect } from "react";
import axios from 'axios';
import AdminLayout from "../Layouts/adminLayout";
import { hostname } from "../config";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/contextAuth";

function FormColors() { 
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        day: '',
        enhance_color: '',
        enhance_thai: '',
        enhance_text_color: '',
        featured_color: '',
        featured_thai: '',
        featured_text_color: '',
        succeed_color: '',
        succeed_thai: '',
        succeed_text_xolor: '',
        fortune_color: '',
        fortune_thai: '',
        fortune_text_color: '',
        patron_color: '',
        patron_thai: '',
        patron_text_colot: '',
        forbidden_color: '',
        forbidden_thai: '',
        forbidden_text_color:''
    })

    const colorInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const colorSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(hostname+'/color/insert/colors', {
                day: formData.day,
                enhance: {
                    color_enhance: {
                        color_text: formData.enhance_text_color,
                        enhance_color: formData.enhance_color,
                        thaicolor: formData.enhance_thai
                    }
                },
                featured: {
                    color_featured: {
                        color_text: formData.featured_text_color,
                        featured_color: formData.featured_color,
                        thaicolor : formData.featured_thai
                    }
                },
                succeed: {
                    color_succeed: {
                        color_text: formData.succeed_text_xolor,
                        succeed_color: formData.succeed_color,
                        thaicolor: formData.succeed_thai
                    }
                },
                fortune: {
                    color_fortune: {
                        color_text: formData.forbidden_text_color,
                        fortune_color: formData.fortune_color,
                        thaicolor: formData.fortune_thai
                    }
                },
                patron: {
                    color_patron: {
                        color_text: formData.patron_text_colot,
                        patron_color: formData.patron_color,
                        thaicolor: formData.patron_thai
                    }
                },
                forbidden: {
                    color_forbidden: {
                        color_text: formData.forbidden_text_color,
                        forbidden_color: formData.forbidden_color,
                        thaicolor : formData.forbidden_thai
                    }
                }
            })
            
            if (res.data ) {
                alert('เพิ่มข้อมูลสีสำเร็จ!');
                setFormData({
                    day: '',
                    enhance_color: '',
                    enhance_thai: '',
                    enhance_text_color: '',
                    featured_color: '',
                    featured_thai: '',
                    featured_text_color: '',
                    succeed_color: '',
                    succeed_thai: '',
                    succeed_text_xolor: '',
                    fortune_color: '',
                    fortune_thai: '',
                    fortune_text_color: '',
                    patron_color: '',
                    patron_thai: '',
                    patron_text_colot: '',
                    forbidden_color: '',
                    forbidden_thai: '',
                    forbidden_text_color:''
                })
            }
            else {
                alert('API did not return success')
            }
        }
        catch (error) {
            console.error('เกิดข้อผิดพลาด:', error);
            alert('เกิดข้อผิดพลาดในการส่งข้อมูล');
        }
    };

    async function isAdmin() {
        if (currentUser) {
            await axios.post(hostname + '/auth/user', { email: currentUser.email })
            .then((result) => {
                if (result.data[0].role !== "admin") {
                    alert("You are not Admin... Logging Out")
                    navigate('/profile')
                }
            })
        }
    }
    useEffect(() => {
        if (!currentUser) {
          navigate("/login");
        }
        isAdmin();
      }, []);
    return (
            <AdminLayout>
                <div className="container mx-auto text-white">

                
            <h1 className="text-2xl font-bold text-center my-6">เพิ่มข้อมูลสีมงคลสำหรับปี 2567</h1>
            <form onSubmit={colorSubmit} className="space-y-4">
                <div className="flex flex-col">
                    <label className="font-semibold">Day:</label>
                    <select name="day" onChange={colorInput} className="border px-4 py-2 rounded text-black">
                        <option>day</option>
                        <option value="จ">จ</option>
                        <option value="อ">อ</option>
                        <option value="พ">พ</option>
                        <option value="พฤ">พฤ</option>
                        <option value="ศ">ศ</option>
                        <option value="ส">ส</option>
                        <option value="อา">อา</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold">Enhance Color:</label>
                    <input 
                        type="text" 
                        name="enhance_color" 
                        value={formData.enhance_color} 
                        onChange={colorInput}
                        className="border px-4 py-2 text-black"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold">Enhance Color thai:</label>
                    <input 
                            type="text" 
                            name="enhance_thai" 
                            value={formData.enhance_thai} 
                            onChange={colorInput}
                            className="border px-4 py-2 text-black"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold">Enhance Text Color:</label>
                    <div className="flex space-x-4">
                        <div>
                            <input 
                                type="radio" 
                                name="enhance_text_color" 
                                value={'#ffffff'} 
                                onChange={colorInput}
                                className="border px-4 py-2 text-black"
                            /> 
                            <label htmlFor="white"> white </label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                name="enhance_text_color" 
                                value={'#000000'} 
                                onChange={colorInput}
                                className="border px-4 py-2 text-black"
                            /> 
                            <label htmlFor="black"> black</label>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Featured Color:</label>
                    <input 
                        type="text" 
                        name="featured_color" 
                        value={formData.featured_color} 
                        onChange={colorInput}
                        className="border px-4 py-2 text-black"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold">Featured Color: thai:</label>
                    <input 
                            type="text" 
                            name="featured_thai" 
                            value={formData.featured_thai} 
                            onChange={colorInput}
                            className="border px-4 py-2 text-black"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold">Featured text Color:</label>
                    <div className="flex space-x-4">
                        <div>
                            <input 
                                type="radio" 
                                name="featured_text_color" 
                                value={'#ffffff'} 
                                onChange={colorInput}
                                className="border px-4 py-2 text-black"
                            /> 
                            <label htmlFor="white"> white </label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                name="featured_text_color" 
                                value={'#000000'} 
                                onChange={colorInput}
                                className="border px-4 py-2 text-black"
                            /> 
                            <label htmlFor="black"> black</label>
                        </div>
                    </div>
                </div>
                    
                <div className="flex flex-col">
                    <label className="font-semibold">Succeed Color:</label>
                    <input 
                        type="text" 
                        name="succeed_color" 
                        value={formData.succeed_color} 
                        onChange={colorInput}
                        className="border px-4 py-2 text-black"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold">Succeed Color: thai:</label>
                    <input 
                            type="text" 
                            name="succeed_thai" 
                            value={formData.succeed_thai} 
                            onChange={colorInput}
                            className="border px-4 py-2 text-black"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold">Succeed text Color:</label> 
                    <div className="flex space-x-4">
                        <div>
                            <input 
                                type="radio" 
                                name="succeed_text_xolor" 
                                value={'#ffffff'} 
                                onChange={colorInput}
                                className="border px-4 py-2 text-black"
                            /> 
                            <label htmlFor="white"> white </label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                name="succeed_text_xolor" 
                                value={'#000000'} 
                                onChange={colorInput}
                                className="border px-4 py-2 text-black"
                            /> 
                            <label htmlFor="black"> black</label>
                        </div>
                    </div>
                </div>
                    
                <div className="flex flex-col">
                    <label className="font-semibold">Fortune Color:</label>
                    <input  
                        type="text" 
                        name="fortune_color" 
                        value={formData.fortune_color} 
                        onChange={colorInput}
                        className="border px-4 py-2 text-black"
                    />
                    </div>
                <div className="flex flex-col">
                    <label className="font-semibold">Fortune Color: thai:</label>
                    <input 
                            type="text" 
                            name="fortune_thai" 
                            value={formData.fortune_thai} 
                            onChange={colorInput}
                            className="border px-4 py-2 text-black"
                    />
                </div> 
                <div className="flex flex-col">
                    <label className="font-semibold">Fortune text Color:</label>
                    <div className="flex space-x-4">
                        <div>
                            <input 
                                type="radio" 
                                name="fortune_text_color" 
                                value={'#ffffff'} 
                                onChange={colorInput}
                                className="border px-4 py-2 text-black"/> 
                            <label htmlFor="white"> white </label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                name="fortune_text_color" 
                                value={'#000000'} 
                                onChange={colorInput}
                                className="border px-4 py-2 text-black"/> 
                            <label htmlFor="black"> black</label>
                        </div>
                    </div>
                </div>
                    
                <div className="flex flex-col">
                    <label className="font-semibold">Patron Color:</label>
                    <input 
                        type="text" 
                        name="patron_color" 
                        value={formData.patron_color} 
                        onChange={colorInput}
                        className="border px-4 py-2 text-black"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold">Patron Color: thai:</label>
                    <input 
                            type="text" 
                            name="patron_thai" 
                            value={formData.patron_thai} 
                            onChange={colorInput}
                            className="border px-4 py-2 text-black"
                    />
                </div> 
                <div className="flex flex-col">
                    <label className="font-semibold">Patron text Color:</label>
                    <div className="flex space-x-4">
                        <div>
                            <input 
                                type="radio" 
                                name="patron_text_colot" 
                                value={'#ffffff'} 
                                onChange={colorInput}
                                className="border px-4 py-2 text-black"/> 
                            <label htmlFor="white"> white </label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                name="patron_text_colot" 
                                value={'#000000'} 
                                onChange={colorInput}
                                className="border px-4 py-2 text-black"/> 
                            <label htmlFor="black"> black</label>
                        </div>
                    </div>
                    </div>
                    
                <div className="flex flex-col">
                    <label className="font-semibold">Forbidden Color:</label>
                    <input 
                        type="text" 
                        name="forbidden_color" 
                        value={formData.forbidden_color} 
                        onChange={colorInput}
                        className="border px-4 py-2 text-black"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold">Forbidden Color: thai:</label>
                    <input 
                            type="text" 
                            name="forbidden_thai" 
                            value={formData.forbidden_thai} 
                            onChange={colorInput}
                            className="border px-4 py-2 text-black"
                    />
                </div>     
                <div className="flex flex-col">
                    <label className="font-semibold">Forbidden text Color:</label>
                    <div className="flex space-x-4">
                        <div>
                            <input 
                                type="radio" 
                                name="forbidden_text_color" 
                                value={'#ffffff'} 
                                onChange={colorInput}
                                className="border px-4 py-2 text-black"/> 
                            <label htmlFor="white"> white </label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                name="forbidden_text_color" 
                                value={'#000000'} 
                                onChange={colorInput}
                                className="border px-4 py-2 text-black"/> 
                            <label htmlFor="black"> black</label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4">Submit</button>
            </form>
            </div>
            </AdminLayout>
    )
}

export default FormColors;