import { useState , useEffect} from "react"
import axios from "axios"
import AdminLayout from "../Layouts/adminLayout"
import { hostname } from "../config"

function DeleteColors() {
    const [colorData, setColorData] = useState(null)
    
    const colorAPI = () => {
        try {
            axios.get(hostname+'/color/showall')
                .then((result) => {
                    setColorData(result.data)
                })
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleDelete = (id) => {
        try {
            axios.delete(hostname+`/color/delete/${id}`)
                .then(() => {
                    alert('reload new')
                    window.location.reload()
                 })
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        colorAPI()
    }, [])

    return (
            <AdminLayout>
            {colorData && (
                <div className="overflow-x-auto p-4">
                    <table className="min-w-full table-auto border-collapse border border-gray-300 shadow-lg rounded-lg">
                        <thead>
                            <tr className="bg-indigo-500 text-white">
                                <th className="border border-gray-300 px-6 py-4">Day</th>
                                <th className="border border-gray-300 px-6 py-4">Enhance</th>
                                <th className="border border-gray-300 px-6 py-4">Featured</th>
                                <th className="border border-gray-300 px-6 py-4">Succeed</th>
                                <th className="border border-gray-300 px-6 py-4">Fortune</th>
                                <th className="border border-gray-300 px-6 py-4">Patron</th>
                                <th className="border border-gray-300 px-6 py-4">Forbidden Colors</th>
                                <th className="border border-gray-300 px-6 py-4">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {colorData.map((colorItem) => (
                                <tr key={colorItem._id} className="hover:bg-indigo-100 transition duration-300 ease-in-out">
                                    <td className="border border-gray-300 px-6 py-4 text-center font-semibold">{colorItem.day}</td>
                                    <td className="border border-gray-300 px-6 py-4 text-center" style={{
                                        backgroundColor: colorItem.enhance.color_enhance.enhance_color,
                                        color: colorItem.enhance.color_enhance.color_text
                                    }}>
                                        {colorItem.enhance.color_enhance.enhance_color}
                                    </td>
                                    <td className="border border-gray-300 px-6 py-4 text-center" style={{
                                        backgroundColor: colorItem.featured.color_featured.featured_color,
                                        color: colorItem.featured.color_featured.color_text
                                    }}>
                                        {colorItem.featured.color_featured.featured_color}
                                    </td>
                                    <td className="border border-gray-300 px-6 py-4 text-center" style={{
                                        backgroundColor: colorItem.succeed.color_succeed.succeed_color,
                                        color: colorItem.succeed.color_succeed.color_text
                                    }}>
                                        {colorItem.succeed.color_succeed.succeed_color}
                                    </td>
                                    <td className="border border-gray-300 px-6 py-4 text-center" style={{
                                        backgroundColor: colorItem.fortune.color_fortune.fortune_color,
                                        color: colorItem.fortune.color_fortune.color_text
                                    }}>
                                        {colorItem.fortune.color_fortune.fortune_color}
                                    </td>
                                    <td className="border border-gray-300 px-6 py-4 text-center" style={{
                                        backgroundColor: colorItem.patron.color_patron.patron_color,
                                        color: colorItem.patron.color_patron.color_text
                                    }}>
                                        {colorItem.patron.color_patron.patron_color}
                                    </td>
                                    <td className="border border-gray-300 px-6 py-4 text-center" style={{
                                        backgroundColor: colorItem.forbidden.color_forbidden.forbidden_color,
                                        color: colorItem.forbidden.color_forbidden.color_text
                                    }}>
                                        {colorItem.forbidden.color_forbidden.forbidden_color}
                                    </td>
                                    <td className="border border-gray-300 px-6 py-4 text-center">
                                        <button 
                                            type="button"
                                            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition duration-200"
                                            onClick={() => handleDelete(colorItem._id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            </AdminLayout>
    )
}

export default DeleteColors