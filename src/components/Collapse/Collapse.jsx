import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import '../Collapse/collapse.scss';

function Collapse({ content, title}) {
    
    const [isOpen, setIsOpen] = useState(false);
   
    return (
        <div className={`dropdown ${isOpen ? 'open' : ''}`}>
            
            <button className="collapse-button">
            <h2>
                {title}
            </h2>
            <FontAwesomeIcon 
                icon={faChevronUp} 
                className={isOpen ? 'open' : ''}  
                onClick={() => setIsOpen(!isOpen)}
            />
            </button>
            <div  className={`content-wrapper ${isOpen ? 'open' : ''}`}>
            <span className='content'>{content}</span>
            </div>
        </div>
    );
}

export default Collapse;