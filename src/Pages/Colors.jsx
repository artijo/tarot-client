import { useState, useEffect } from "react";
import axios from 'axios';
import UserLayout from "../Layouts/userLayout";

function Colors() {
    const [color, setColor] = useState(null);

    const colorsAPI = () => {
        try {
            axios.get('http://127.0.0.1:3000/color/showall')
                .then((result) => {
                    setColor(result.data);
                });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        colorsAPI();
    }, []);

    return (
        <div className="container mx-auto m-2">
            <UserLayout>
            <h1 className="text-3xl font-bold text-center my-8 text-white">สีมงคลสำหรับปี 2567</h1>

            {color && (
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-black shadow-lg rounded-lg">
                        <thead>
                            <tr>
                                <th className="border border-black px-6 py-4" style={{ backgroundColor: "#74e3b5", color: "#1F2937" }}>วัน</th>
                                <th className="border border-black px-6 py-4" style={{ backgroundColor: "#74e3b5", color: "#1F2937" }}>เสริมเสน่ห์</th>
                                <th className="border border-black px-6 py-4" style={{ backgroundColor: "#74e3b5", color: "#1F2937" }}>งานเด่น</th>
                                <th className="border border-black px-6 py-4" style={{ backgroundColor: "#74e3b5", color: "#1F2937" }}>สำเร็จแคล้วคลาด</th>
                                <th className="border border-black px-6 py-4" style={{ backgroundColor: "#74e3b5", color: "#1F2937" }}>โชคลาภ</th>
                                <th className="border border-black px-6 py-4" style={{ backgroundColor: "#74e3b5", color: "#1F2937" }}>คนอุปถัมภ์</th>
                                <th className="border border-black px-6 py-4" style={{ backgroundColor: "#74e3b5", color: "#1F2937" }}>สีห้ามใส่</th>
                            </tr>
                        </thead>
                        <tbody>
                            {color.map((colorItem) => (
                                <tr key={colorItem._id} className="hover:bg-blue-50 transition duration-300 ease-in-out">
                                    <td className="border border-black px-6 py-4 text-center font-medium" style={{ backgroundColor: "#85f0c4", color: "#374151" }}>
                                        {colorItem.day}
                                    </td>
                                    <td className="border border-black px-6 py-4 text-center" style={{
                                        backgroundColor: colorItem.enhance.color_enhance.enhance_color,
                                        color: colorItem.enhance.color_enhance.color_text
                                    }}>
                                        {colorItem.enhance.color_enhance.thaicolor}
                                    </td>
                                    <td className="border border-black px-6 py-4 text-center" style={{
                                        backgroundColor: colorItem.featured.color_featured.featured_color,
                                        color: colorItem.featured.color_featured.color_text
                                    }}>
                                        {colorItem.featured.color_featured.thaicolor}
                                    </td>
                                    <td className="border border-black px-6 py-4 text-center" style={{
                                        backgroundColor: colorItem.succeed.color_succeed.succeed_color,
                                        color: colorItem.succeed.color_succeed.color_text
                                    }}>
                                        {colorItem.succeed.color_succeed.thaicolor}
                                    </td>
                                    <td className="border border-black px-6 py-4 text-center" style={{
                                        backgroundColor: colorItem.fortune.color_fortune.fortune_color,
                                        color: colorItem.fortune.color_fortune.color_text
                                    }}>
                                        {colorItem.fortune.color_fortune.thaicolor}
                                    </td>
                                    <td className="border border-black px-6 py-4 text-center" style={{
                                        backgroundColor: colorItem.patron.color_patron.patron_color,
                                        color: colorItem.patron.color_patron.color_text
                                    }}>
                                        {colorItem.patron.color_patron.thaicolor}
                                    </td>
                                    <td className="border border-black px-6 py-4 text-center" style={{
                                        backgroundColor: colorItem.forbidden.color_forbidden.forbidden_color,
                                        color: colorItem.forbidden.color_forbidden.color_text
                                    }}>
                                        {colorItem.forbidden.color_forbidden.thaicolor}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            </UserLayout>
        </div>
    );
}

export default Colors;