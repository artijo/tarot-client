import HeaderAdmin from "../components/HaderAdmin";
import Footer from "../components/Footer";
function AdminLayout({children}) {
  return (
    <main className="min-h-screen bg-[#010030] antialiased relative lg:pt-[100px] pt-[90px] md:pt-[120px] pb-[125px] sm:pb-[90px]">
            <HeaderAdmin />
            <div className="container mx-auto">
                {children}
            </div>
          <Footer />
    </main>
  );
}


export default AdminLayout;