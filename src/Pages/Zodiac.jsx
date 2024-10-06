import UserLayout from "../Layouts/userLayout";
import { Link } from 'react-router-dom';


function Zodiac() {
  return (
    <UserLayout>
      <div>
        <h1 className="text-white text-4xl text-center mb-3">ดวงราศี</h1>
        <h5 className="text-white text-center mb-4">พยากรณ์ระหว่างวันที่ 15-21 ก.ย. 2567</h5>
        <div className="p-1 flex flex-wrap items-center justify-center">
          <Link to="/zodiacHroscope?sign=CAPRICORNUS" className="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg">
            <div className="relative pt-10 px-10 flex items-center justify-center">
              <img className="relative w-40" src="/img/1_ARIES.png" alt="ARIES" />
            </div>
            <div className="relative text-[#010030] px-6 pb-6 mt-6">
              <span className="block opacity-75 text-xl font-semibold text-center">ราศีมังกร</span>
              <div className="flex justify-center items-center">
                <span className="block -mb-1">22 ธ.ค. - 20 ม.ค.</span>
              </div>
            </div>
          </Link>

          <Link to="/zodiacHroscope?sign=AQUARIUS" className="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg">
            <div className="relative pt-10 px-10 flex items-center justify-center">
              <img className="relative w-40" src="/img/2_TAURUS.png" alt="TAURUS" />
            </div>
            <div className="relative text-[#010030] px-6 pb-6 mt-6">
              <span className="block opacity-75 text-xl font-semibold text-center">ราศีกุมภ์</span>
              <div className="flex justify-center items-center">
                <span className="block -mb-1 ">21 ม.ค. – 19 ก.พ.</span>
              </div>
            </div>
          </Link>

          <Link to="/zodiacHroscope?sign=PISCES" className="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg">
            <div className="relative pt-10 px-10 flex items-center justify-center">
              <img className="relative w-40" src="/img/3_PISCES.png" alt="PISCES" />
            </div>
            <div className="relative text-[#010030] px-6 pb-6 mt-6">
              <span className="block opacity-75 text-xl font-semibold text-center">ราศีมีน</span>
              <div className="flex justify-center items-center">
                <span className="block -mb-1 ">20 ก.พ. – 20 มี.ค.</span>
              </div>
            </div>
          </Link>
          
          <Link to="/zodiacHroscope?sign=ARIES"v className="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg">
            <div className="relative pt-10 px-10 flex items-center justify-center">
              <img className="relative w-40" src="/img/4_AQUARIUS.png" alt="AQUARIUS" />
            </div>
            <div className="relative text-[#010030] px-6 pb-6 mt-6">
              <span className="block opacity-75 text-xl font-semibold text-center">ราศีเมษ</span>
              <div className="flex justify-center items-center">
                <span className="block -mb-1 ">21 มี.ค. – 20 เม.ย.</span>
              </div>
            </div>
          </Link>

          <Link to="/zodiacHroscope?sign=TAURUS" className="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg">
            <div className="relative pt-10 px-10 flex items-center justify-center">
              <img className="relative w-40" src="/img/5_CAPRICORN.png" alt="CAPRICORN" />
            </div>
            <div className="relative text-[#010030] px-6 pb-6 mt-6">
              <span className="block opacity-75 text-xl font-semibold text-center">ราศีพฤษภ</span>
              <div className="flex justify-center items-center">
                <span className="block -mb-1 ">21 เม.ย. – 20 พ.ค.</span>
              </div>
            </div>
          </Link>

          <Link to="/zodiacHroscope?sign=GEMINI" className="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg">
            <div className="relative pt-10 px-10 flex items-center justify-center">
              <img className="relative w-40" src="/img/6_GEMINI.png" alt="GEMINI" />
            </div>
            <div className="relative text-[#010030] px-6 pb-6 mt-6">
              <span className="block opacity-75 text-xl font-semibold text-center">ราศีเมถุน</span>
              <div className="flex justify-center items-center">
                <span className="block -mb-1 ">21 พ.ค. – 21 มิ.ย.</span>
              </div>
            </div>
          </Link>

          <Link to="/zodiacHroscope?sign=CANCER" className="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg">
            <div className="relative pt-10 px-10 flex items-center justify-center">
              <img className="relative w-40" src="/img/7_CANCER.png" alt="CANCER" />
            </div>
            <div className="relative text-[#010030] px-6 pb-6 mt-6">
              <span className="block opacity-75 text-xl font-semibold text-center">ราศีกรกฎ</span>
              <div className="flex justify-center items-center">
                <span className="block -mb-1 ">22 มิ.ย. – 23 ก.ค.</span>
              </div>
            </div>
          </Link>

          <Link to="/zodiacHroscope?sign=LEO" className="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg">
            <div className="relative pt-10 px-10 flex items-center justify-center">
              <img className="relative w-40" src="/img/8_LEO.png" alt="LEO" />
            </div>
            <div className="relative text-[#010030] px-6 pb-6 mt-6">
              <span className="block opacity-75 text-xl font-semibold text-center">ราศีสิงห์</span>
              <div className="flex justify-center items-center">
                <span className="block -mb-1 ">24 ก.ค. – 23 ส.ค</span>
              </div>
            </div>
          </Link>

          <Link to="/zodiacHroscope?sign=VIRGO" className="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg">
            <div className="relative pt-10 px-10 flex items-center justify-center">
              <img className="relative w-40" src="/img/9_VIRGO.png" alt="VIRGO" />
            </div>
            <div className="relative text-[#010030] px-6 pb-6 mt-6">
              <span className="block opacity-75 text-xl font-semibold text-center">ราศีกันย์</span>
              <div className="flex justify-center items-center">
                <span className="block -mb-1 ">24 ส.ค. – 23 ก.ย.</span>
              </div>
            </div>
          </Link>
          
          <Link to="/zodiacHroscope?sign=LIBRA" className="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg">
            <div className="relative pt-10 px-10 flex items-center justify-center">
              <img className="relative w-40" src="/img/10_LIBRA.png" alt="LIBRA" />
            </div>
            <div className="relative text-[#010030] px-6 pb-6 mt-6">
              <span className="block opacity-75 text-xl font-semibold text-center">ราศีตุลย์</span>
              <div className="flex justify-center items-center">
                <span className="block -mb-1 ">24 ก.ย. – 23 ต.ค.</span>
              </div>
            </div>
          </Link>

          <Link to="/zodiacHroscope?sign=SCORPIO" className="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg">
            <div className="relative pt-10 px-10 flex items-center justify-center">
              <img className="relative w-40" src="/img/11_SCORPIO.png" alt="SCORPIO" />
            </div>
            <div className="relative text-[#010030] px-6 pb-6 mt-6">
              <span className="block opacity-75 text-xl font-semibold text-center">ราศีพิจิก</span>
              <div className="flex justify-center items-center">
                <span className="block -mb-1 ">24 ต.ค. – 22 พ.ย.</span>
              </div>
            </div>
          </Link>

          <Link to="/zodiacHroscope?sign=SAGITARIUS" className="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg">
            <div className="relative pt-10 px-10 flex items-center justify-center">
              <img className="relative w-40" src="/img/12_SAGITTARIUS.png" alt="SAGITTARIUS" />
            </div>
            <div className="relative text-[#010030] px-6 pb-6 mt-6">
              <span className="block opacity-75 text-xl font-semibold text-center">ราศีธนู</span>
              <div className="flex justify-center items-center">
                <span className="block -mb-1 ">23 พ.ย. – 21 ธ.ค.</span>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </UserLayout>
  );
}

export default Zodiac;
