import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <>
      <div className="max-width padding-x">
        <Navbar />
        <Hero />
        <Search />
      </div>
      <Footer />
    </>
  );
}

export default App;
