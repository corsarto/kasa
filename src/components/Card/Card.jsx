import  { datas } from '../../datas/datas.json';
import { useNavigate } from 'react-router-dom';





function Card() {
    const nav = useNavigate();
    

    return (
        <div className='card-container'>
            
                {datas.map((data) => (
                    <div
                        className='card'
                        key={data.id}
                        onClick={() => nav(`/location/${data.id}`)}
                    >
                        <img src={data.cover} alt={data.title} className='img-card' />
                        <h2 className='title-card'>{data.title}</h2>
                    </div>
                ))}
           
        </div>
    );
}


export default Card;