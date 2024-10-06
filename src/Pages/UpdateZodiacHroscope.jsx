import { useState, useEffect } from "react";
import AdminLayout from "../Layouts/adminLayout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UpdateZodiacHroscope() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [formData, setFormData] = useState({
    CAPRICORNUS: '',
    AQUARIUS: '',
    PISCES: '',
    ARIES: '',
    TAURUS: '',
    GEMINI: '',
    CANCER: '',
    LEO: '',
    VIRGO: '',
    LIBRA: '',
    SCORPIO: '',
    SAGITARIUS: ''
  });

  const navigate = useNavigate();


  useEffect(() => {
    const fetchLatestHoroscope = async () => {
      try {
        const response = await axios.get("http://localhost:3000/horoscopeZodiac");
        const data = response.data;
        
        
        setStartDate(new Date(data.startdate));
        setEndDate(new Date(data.enddate));
        setFormData({
          _id: data._id.$oid || data._id,
          CAPRICORNUS: data.CAPRICORNUS || '',
          AQUARIUS: data.AQUARIUS || '',
          PISCES: data.PISCES || '',
          ARIES: data.ARIES || '',
          TAURUS: data.TAURUS || '',
          GEMINI: data.GEMINI || '',
          CANCER: data.CANCER || '',
          LEO: data.LEO || '',
          VIRGO: data.VIRGO || '',
          LIBRA: data.LIBRA || '',
          SCORPIO: data.SCORPIO || '',
          SAGITARIUS: data.SAGITARIUS || ''
        });
      } catch (error) {
        console.error("Error fetching latest horoscope", error);
      }
    };

    fetchLatestHoroscope();
  }, []);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/horoscopeZodiac/${formData._id}`, {
        startdate: startDate || new Date(),
        enddate: endDate || new Date(),
        ...formData 
      });
      console.log(response.data);
      alert("อัปเดตคำทำนายสำเร็จ!");
      navigate("/");
    } catch (error) {
      console.error("Error updating horoscope", error);
      alert("เกิดข้อผิดพลาดในการอัปเดตคำทำนาย");
    }
  };

  return (
    <AdminLayout>
      <h1 className="text-white text-4xl text-center mb-3">แก้ไขดวงราศี</h1>
      <div className="max-w-4xl mx-auto">
        <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <label htmlFor="message" className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
            พยากรณ์ระหว่างวันที่
          </label>

          <div className="flex items-center mb-4">
            <div className="relative">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                dateFormat="dd/MM/yyyy"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholderText="Select date start"
                required/>
            </div>
            <span className="mx-4 text-gray-500">to</span>
            <div className="relative">
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                dateFormat="dd/MM/yyyy"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholderText="Select date end"
                required/>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-2 ">
            <div>
               <label htmlFor="CAPRICORNUS" className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
            คำทำนาย ราศีมังกร
          </label>
          <textarea
            id="CAPRICORNUS"
            name="CAPRICORNUS"
            rows="4"
            value={formData.CAPRICORNUS}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="กรอกคำทำนายสำหรับ ราศีมังกร"
            required></textarea>
            </div>
         
            <div>
           <label htmlFor="AQUARIUS" className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
            คำทำนาย ราศีกุมภ์
          </label>
          <textarea
            id="AQUARIUS"
            name="AQUARIUS"
            rows="4"
            value={formData.AQUARIUS}
            onChange={handleChange} 
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="กรอกคำทำนายสำหรับ ราศีกุมภ์"
            required></textarea>   
              </div>
          
              <div>
              <label htmlFor="PISCES" className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
            คำทำนาย ราศีมีน
          </label>
          <textarea
            id="PISCES"
            name="PISCES"
            rows="4"
            value={formData.PISCES}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="กรอกคำทำนายสำหรับ ราศีมีน"
            required></textarea>
              </div>
          
              <div>
              <label htmlFor="ARIES" className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
            คำทำนาย ราศีเมษ
          </label>
          <textarea
            id="ARIES"
            name="ARIES"
            rows="4"
            value={formData.ARIES}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="กรอกคำทำนายสำหรับ ราศีเมษ"
            required></textarea>
              </div>
          
              <div>
              <label htmlFor="TAURUS" className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
            คำทำนาย ราศีพฤษภ
          </label>
          <textarea
            id="TAURUS"
            name="TAURUS"
            rows="4"
            value={formData.TAURUS}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="กรอกคำทำนายสำหรับ ราศีพฤษภ"
            required></textarea>
              </div>
          
              <div>
              <label htmlFor="GEMINI" className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
            คำทำนาย ราศีเมถุน
          </label>
          <textarea
            id="GEMINI"
            name="GEMINI"
            rows="4"
            value={formData.GEMINI}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="กรอกคำทำนายสำหรับ ราศีเมถุน"
            required></textarea>
              </div>
          
              <div>
              <label htmlFor="CANCER" className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
            คำทำนาย ราศีกรกฎ
          </label>
          <textarea
            id="CANCER"
            name="CANCER"
            rows="4"
            value={formData.CANCER}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="กรอกคำทำนายสำหรับ ราศีกรกฎ"
            required></textarea>
              </div>
          
              <div>
              <label htmlFor="LEO" className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
            คำทำนาย ราศีสิงห์
          </label>
          <textarea
            id="LEO"
            name="LEO"
            rows="4"
            value={formData.LEO}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="กรอกคำทำนายสำหรับ ราศีสิงห์"
            required></textarea>
              </div>
          
              <div>
              <label htmlFor="VIRGO" className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
            คำทำนาย ราศีกันย์
          </label>
          <textarea
            id="VIRGO"
            name="VIRGO"
            rows="4"
            value={formData.VIRGO}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="กรอกคำทำนายสำหรับ ราศีกันย์"
            required></textarea>
              </div>
          
              <div>
               <label htmlFor="LIBRA" className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
            คำทำนาย ราศีตุลย์
          </label>
          <textarea
            id="LIBRA"
            name="LIBRA"
            rows="4"
            value={formData.LIBRA}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="กรอกคำทำนายสำหรับ ราศีตุลย์"
            required></textarea>
              </div>
         
              <div>
               <label htmlFor="SCORPIO" className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
            คำทำนาย ราศีพิจิก
          </label>
          <textarea
            id="SCORPIO"
            name="SCORPIO"
            rows="4"
            value={formData.SCORPIO}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="กรอกคำทำนายสำหรับ ราศีพิจิก"
            required></textarea>
              </div>
         
              <div>
              <label htmlFor="SAGITARIUS" className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white">
            คำทำนาย ราศีธนู
          </label>
          <textarea
            id="SAGITARIUS"
            name="SAGITARIUS"
            rows="4"
            value={formData.SAGITARIUS}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="กรอกคำทำนายสำหรับ ราศีธนู"
            required></textarea>
              </div>
          
</div>

          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5 w-full" type="submit">
            บันทึกคำทำนาย
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}

export default UpdateZodiacHroscope;
