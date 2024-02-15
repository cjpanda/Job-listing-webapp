import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Search from "./components/Search";

function App() {
  return (
    <>
      <div className="max-width padding-x">
        <div className="flex flex-1 items-center justify-between pt-10">
          <h2 className="text-3xl font-bold text-primary">glumos</h2>
          <ul className="flex gap-10 font-bold">
            <li className="text-light cursor-pointer">Login</li>
            <li className="text-primary cursor-pointer">Signup</li>
          </ul>
        </div>
        <Hero />
        <Search />
      </div>
      <Footer />
    </>
  );
}

export default App;
