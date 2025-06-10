import logo from "../imgs/images.png"
import { Link } from "react-router-dom";
import "../App.css"

export default function Header() {
  return (
    <header>
      <img id="logo" src={logo} alt="Img of FitLife logo" />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/BookingForm">BookingForm</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
