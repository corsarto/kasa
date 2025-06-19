import { Link } from 'react-router-dom';
import '../../assets/style/main.scss';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';




function Home() {
  return <div className ="home-container">
      <Banner />
      
      <Link to='/location/id?' className="link-location"><Card /></Link>
   
    
    </div>

}
export default Home
