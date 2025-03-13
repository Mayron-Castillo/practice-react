import './UserCard.css'

function UserCard(props) {
    return (
        <div className='Logo-card'>
            <img className="logo-barca" src={props.image} alt="Escudo del Barca"/>
            <h3>{props.name}</h3>
            <p>Equipo de {props.country}</p>
        </div>
    )
}

export default UserCard
