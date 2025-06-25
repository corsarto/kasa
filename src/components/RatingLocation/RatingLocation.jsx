import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { datas } from '../../datas/datas.json'
import { useParams } from 'react-router-dom';
import './ratinglocation.scss';


function RatingLocation() {
    const { id } = useParams();

    const logement = datas.find((item) => item.id === id);
    const stars = Array(5).fill(0)
    
    return (
        <div className='rating-location'>
            {stars.map((_, index) => (
                <FontAwesomeIcon
                    icon={faStar}
                    key={index}
                    className={`star-icon${(logement.rating > index ? ' active' : '')}`}
                />
            ))}
        </div>
    );
}

export default RatingLocation;