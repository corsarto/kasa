import imgAbout from '../../assets/images/img-about.png';

function About() {
  return (
    <div>
      <img src={imgAbout} alt="Image d'illustration à propos" />
      <div>
        
          <h2>Fiabilité</h2>
          <span>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
          </span>
          <h2>Respect</h2>
          <span>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
          </span>
          <h2>Service</h2>
          <span>
            La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
          </span>
          <h2>Sécurité</h2>
          <span>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
          </span>
          
        
      </div>
    </div>
  )
}
export default About
