import { datas } from '../../datas/datas.json'
import { useParams } from 'react-router-dom';
import './LocationDetail.scss';
import Collapse from '../Collapse/Collapse';
import RatingLocation from '../RatingLocation/RatingLocation';

function LocationDetail() {
     const { id } = useParams();

    const logement = datas.find((item) => item.id === id);
    return (
    <>
        <div className='location-detail'>
            <div className='container-title-location'>
                <h1>{logement.title}</h1>
                <p>{logement.location}</p>
                <ul>
                    {logement.tags && logement.tags.map((tags, index) => (
                        <li key={index}>{tags}</li>
                    ))}
                </ul>
            </div>
            <div className='container-host'>
                <div className='host-description'>
                    <p>{logement.host.name}</p>
                    <img src={logement.host.picture} alt="Photo du propriétaire"/>
                </div>
                <RatingLocation />
            </div>
        </div>
        
        <div className="container-infos-location">
            <Collapse className='collapse-location'
                title='Description'
                content={logement.description}
            />
            <Collapse className='collapse-location'
                title='Equipements'
                content={
                    <ul>
                        {logement.equipments && logement.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                    }
                    /> 
        </div>
    </>
        
    );
}

export default LocationDetail;