import { Link } from 'react-router-dom';
import '../Error/error.scss'

function Error () {
    return (
        <div className='container-error'>
        <h1>404</h1>
        <h2>Oups! La page que <span>vous demandez n'existe pas.</span></h2>
        <Link to="/" className='link-error'>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error;