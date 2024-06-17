import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import { MdMapsHomeWork } from "react-icons/md";

function NavBar() {

    let ulogovan = window.sessionStorage.getItem("user") ? true : false
    let user = JSON.parse(window.sessionStorage.getItem("user"));
    let isAdmin = user ? user.role === 'admin' : false;


  return (
    <div>
        <nav className="nav">
            <div className="nav__title"><h1> <MdMapsHomeWork /> NekretninePlus <MdMapsHomeWork /> </h1></div>
            <ul className="nav__list">
                <li className="nav__item"><Link to='/'>Home</Link></li>
                <li className="nav__item"><Link to='/about'>O nama</Link></li>
                <li className="nav__item"><Link to='/properties'>Nekretnine</Link></li>
                <li className="nav__item"><Link to='/bookings'>Lista zelja</Link></li>
                {
                    ulogovan ? <li className="nav__item"><Link to='/book'>Kupovina</Link></li> : ''
                }
                {
                    isAdmin ? <li className="nav__item"><Link to='/admin'>Admin</Link></li> : ''
                }
                {
                    !ulogovan ? <>
                        <li className="nav__item"><Link to='/login'>Login</Link></li>
                        <li className="nav__item"><Link to='/register'>Register</Link></li>
                    </> : ''
                }

                {
                    ulogovan ? <li className="nav__item"><Link onClick={
                        () => {
                            window.sessionStorage.removeItem("user");
                            window.sessionStorage.removeItem("token");
                            window.location.href = "/";
                        }
                    } to="#">
                        Logout</Link></li> : ''
                }
            </ul>
        </nav>
    </div>
  );
}

export default NavBar;