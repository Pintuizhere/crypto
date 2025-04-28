import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import About from "./pages/About"
import Review from "./pages/Review"
import SignIn from "./pages/SignIn"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/review" element={<Review />} />
        <Route path="/signin" element={<SignIn />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
