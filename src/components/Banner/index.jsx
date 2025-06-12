
import imgHome from '../../assets/images/img-home.png';



function Banner() {
    return(
        <div className="banner-container">
        <h1 className='title-banner'>Chez vous, partout et ailleurs</h1>
        <img src={imgHome} alt="image reprensentant la mer en fond" className="img-home" />
        </div>
)
}

export default Banner;