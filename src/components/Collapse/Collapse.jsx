import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import '../Collapse/collapse.scss';

function Collapse({ title, content, className }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`${className}`}>
            <h2  onClick={() => setIsOpen(!isOpen)}>
                {title}
                <FontAwesomeIcon icon={faChevronUp} className={isOpen ? 'open' : ''} />
            </h2>
            
            
            {isOpen && <span className={`content ${isOpen ? 'open' : ''}`}>{content}</span>}
        </div>
    );
}

export default Collapse;