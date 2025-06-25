import imgAbout from '../../assets/images/img-about.png';
import '../../assets/style/main.scss';
import AboutInfos from '../../components/AboutInfos/AboutInfos';


function About() {
  return (
    <div className="about-container">
      <img src={imgAbout} alt="Image d'illustration à propos" className="img-about" />
      <div>
        <AboutInfos />
      </div>
    </div>
  )
}
export default About
