import Header from "../components/Header";
import Footer from "../components/Footer";
function UserLayout({ children }) {
  return (
    <main className="min-h-screen bg-slate-100 antialiased relative lg:pt-[100px] pt-[90px] md:pt-[120px] pb-[125px] sm:pb-[90px]">
            <Header />
                {children}
            <Footer />
    </main>
  );
}

export default UserLayout;