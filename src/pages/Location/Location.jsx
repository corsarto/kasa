import Slideshow from "../../components/Slideshow/Slideshow";
import LocationDetail from "../../components/LocationDetail/LocationDetail";
import './location.scss';

function Location() {
    
    

    
    return (
        <div className="location-container">
            <Slideshow />
            <LocationDetail /> 
            
        </div>
    )
}

export default Location;