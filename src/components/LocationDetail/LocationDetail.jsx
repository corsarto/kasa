 import { datas } from '../../datas/datas.json'
 import { useState } from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faChevronUp} from '@fortawesome/free-solid-svg-icons'             

function LocationItem({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="container-about">
            <h2 className="title-about" onClick={() => setIsOpen(!isOpen)}>
                {title}
                <FontAwesomeIcon icon={faChevronUp} className={isOpen ? 'open' : ''} />
            </h2>
            {isOpen && <span className={`content ${isOpen ? 'open' : 'close'}`}>{content}</span>}
        </div>    
    );
}

function LocationDetail() {
    
    return (
        <div className='location-detail'>
            {datas.map((data) => 
                <div key={data.id}>
                    <h1>{data.title}</h1>
                    <div>{data.location}</div>
                    <div>{data.tags}</div>
                    <div>{data.host.name}</div>
                    <img src={data.host.picture} alt="Photo du propriétaire"/>
                    <div>{data.rating}</div>
                    <div>
                        <LocationItem
                            title='Description'
                            content={data.description}
                        />
                        <LocationItem 
                            title='Equipements'
                            content={data.equipments}
                        /> 
                    </div>
                </div>
            )}
        </div>
    );
}

export default LocationDetail;