import "../components/navbar.css";
import Logo from "../assets/Logo_Course.png";
import { Book, UserCircle } from "phosphor-react";

function navbar() {
  return (
    <>
      <section id="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="navbar-content">
          <button>Home</button>
          <button>Instructor</button>
          <button>Contact</button>
          <Book size={40} color="#FFFFFF" />
        </div>
        <div className="profile">
          <p>Username</p>
          <UserCircle size={60} color="#FFFFFF" />
        </div>
      </section>
    </>
  );
}

export default navbar;
