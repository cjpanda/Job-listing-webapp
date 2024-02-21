import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { Routes, Route } from "react-router-dom";
import JobDetails from "./routes/JobDetails";

function App() {
  return (
    <>
      <div className="max-width padding-x">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar /> <Hero />
                <Search />{" "}
              </>
            }
          />
          <Route exact path="/job-details/:job_id" element={<JobDetails />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
