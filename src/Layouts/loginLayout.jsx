import Footer from "../components/Footer";

function LoginLayout({ children }) {
    return (
      <main className="bg-[#010030] min-h-screen antialiased flex items-center justify-center relative ">
              <div className="container mx-auto ">
                  {children}
              </div>
            <Footer />
      </main>
    );
  }
  
  export default LoginLayout;