import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import BackToTop from "./components/UI/BackToTop";
import Footer from "./components/UI/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <BackToTop />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
