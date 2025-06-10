import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import BookingForm from "./components/BookingForm";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/BookingForm" element={<BookingForm/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
