import useTime from './customHooks/useTime';
import '../styles/Footer.css';

function Footer() {
    const timeInBelgrade = useTime();

    return (
        <div>
            <footer className="footer-container"> 
                <div className="footer-text" >
                    © 2022 Copyright: NekretninePlus
                </div> 
                <div className="footer-text" >
                    Email: nekretnine.plus@gmail.com
                </div>
                <div className="footer-text" >
                    Current time in Belgrade: {timeInBelgrade}
                </div>
            </footer> 
        </div>
    );
}

export default Footer;