import { Link } from 'react-router-dom';
import imgForHome from '../../assets/images/img-home.png';
import '../../assets/style/home.scss';


function Home() {
  return <div className ="home-container">
    <div >
    <h1>Chez vous, partout et ailleurs</h1>
    <img src={imgForHome} alt="Image d'illustration d'accueil" />
    </div>
    <Link to="/location:id">Titre de la location 1</Link>
    <Link to="/location:id">Titre de la location 2</Link>
    <Link to="/location:id">Titre de la location 3</Link>
    <Link to="/location:id">Titre de la location 4</Link>
    <Link to="/location:id">Titre de la location 5</Link>
    <Link to="/location:id">Titre de la location 6</Link>
    </div>

}
export default Home
