import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import { MdMapsHomeWork } from "react-icons/md";

function NavBar() {
  return (
    <div>
        <nav className="nav">
            <div className="nav__title"><h1> <MdMapsHomeWork /> NekretninePlus <MdMapsHomeWork /> </h1></div>
                <ul className="nav__list">
                    <li className="nav__item">   <Link to='/'>Home</Link></li>
                    <li className="nav__item"> <Link to='/about'>About us</Link></li>
                    <li className="nav__item"> <Link to='/properties'>Properties</Link></li>
                    <li className="nav__item"> <Link to='/bookings'>Booking</Link></li>

                </ul>
        </nav>
    </div>
  );
}

export default NavBar;