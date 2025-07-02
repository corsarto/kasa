import { datas } from '../../datas/datas.json';
import { useState } from 'react';
import '../Slideshow/Slideshow.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';



function Slideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(''); 
    const { id } = useParams();
    const [prevIndex, setPrevIndex] = useState(null);

    const logement = datas.find((item) => item.id === id);
    const pictures = logement ? logement.pictures : [];
    const handleNext = () => {
        setDirection('right');
        setPrevIndex(currentIndex);
        setCurrentIndex((currentIndex + 1) % pictures.length);
    };
    const handlePrev = () => {
        setDirection('left');
        setPrevIndex(currentIndex);
        setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
    };
  


    return (
        <div  className="slideshow-container" >
            {prevIndex !== null && (
                <img 
                    src={pictures[prevIndex]}
                    alt={`slide-${prevIndex}`}
                    className={`slide-img slide-out-${direction}`}
                    key={prevIndex}
                />
            )}
            <img src={pictures[currentIndex]} 
            alt={`slide-${currentIndex}`} 
            key={currentIndex}
            className={`slide-img  slide-in-${direction} `}
            
            />
        
        {pictures.length > 1 && (
            <div className="navigation-icons">
                <FontAwesomeIcon icon={faChevronLeft} onClick={handlePrev} className="icon-left"/>
                <FontAwesomeIcon icon={faChevronRight} onClick={handleNext} className="icon-right"/>
            <div className="slide-counter">
                {currentIndex + 1}/{pictures.length}
            </div>
            </div>
        )}
    </div>
);
}


  export default Slideshow;