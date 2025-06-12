import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';



function Header() {
    return (
        <div className="header">
            <img src={logo} alt="logo du site Kasa" className="img-logo" />
            <nav className="nav-header">
                <Link to="/">Accueil</Link> 
                <Link to="/about">A Propos</Link>
            </nav>
        </div>
    )
}


export default Header;