import imgAbout from '../../assets/images/img-about.png';
import '../../assets/style/main.scss';
import Collapse from '../../components/Collapse/Collapse';


function About() {
  return (
    <div className="about-container">
      <img src={imgAbout} alt="Image d'illustration à propos" className="img-about" />
      <div>
        <Collapse />
      </div>
    </div>
  )
}
export default About
