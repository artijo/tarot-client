import Footer from "../components/Footer";

function LoginLayout({ children }) {
    return (
      <main className="min-h-screen bg-slate-100 antialiased relative pb-6">
              <div className="container mx-auto">
                  {children}
              </div>
            <Footer />
      </main>
    );
  }
  
  export default LoginLayout;