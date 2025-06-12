import logo from '../../assets/images/logo-footer.png';

function Footer () {
    return (
        <footer className="footer">
            <img src={logo} alt="logo du site Kasa" className="logo-footer" />
            <div className="footer-txt">
            <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;