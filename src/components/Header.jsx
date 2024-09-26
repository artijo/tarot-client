import { Menu, X } from "./icons";
import LoginIcon from "./../assets/icons/login-svgrepo-com.svg";
import Nav from "./Nav";
import { Link } from "react-router-dom";
function Header() {
  const nav = [
    { name: "หน้าแรก", link: "/" },
    { name: "สีมงคล", link: "" },
    { name: "ดวงราศี", link: "/zodiac" },
    { name: "ดวงรายวัน", link: "/tarotdaily" },
    { name: "ทำนาย 6 หมวด", link: "/sixcategory" },
  ];
  return (
    <header className="fixed top-0 z-50 flex w-full flex-wrap md:top-2 md:flex-nowrap md:justify-start md:px-4">
      <nav
        className="relative mx-2 mt-3 min-h-11 w-full rounded-[22px] bg-white/90 px-5 shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5 backdrop-blur dark:bg-slate-700/80 md:mx-auto md:flex md:max-w-max md:items-center md:justify-between md:rounded-full md:px-6 md:py-0"
        aria-label="Global"
      >
        <div className="flex min-h-11 items-center justify-between">
          <Link
            className="flex items-center gap-2 font-bold dark:text-white md:text-xl"
            to="/"
            aria-label="Brand"
          >
            <h1 className="w-max text-lg">
              TAROTBY<sub>dekIT</sub>
            </h1>
          </Link>
          <button
            id="navtoggle"
            className="relative h-6 w-6 md:hidden"
            title="Toggle Menu"
          >
            <div className="i-open pointer-events-none absolute  top-0 transition-all">
              <Menu />
            </div>
            <div className="i-close pointer-events-none absolute top-0 opacity-0 transition-all">
              <X />
            </div>
          </button>
        </div>
        <div
          id="nav"
          className="duration-600 max-h-0 grow basis-full overflow-hidden transition-all md:block md:max-h-none"
        >
          <div className="mb-4 mt-2 flex flex-col gap-x-0 gap-y-4 md:my-0 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-7 md:gap-y-0 md:pl-8 ">
            <Nav nav={nav} />
            <div id="action" className="flex gap-1">
              <Link to="/login">เข้าสู่ระบบ</Link>
              <img src={LoginIcon} alt="เข้าสู่ระบบ" width={20} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
