import datas from '../../datas/datas.json';
import { Link } from 'react-router-dom';

function Card() {

    const handleClick = (data) => {
        console.log(`Card clicked: ${data.id}`);
    }
    return (
        <div className='card-container'>
            {datas.map((data) => (
                <div className='card' key={data.id} onClick={() => handleClick(data)}>
                    <img src={data.cover} alt={data.title} className='img-card'  />
                    <h2 className='title-card'>{data.title}</h2>
                </div>
            ))}
        </div>
    )
}

export default Card;