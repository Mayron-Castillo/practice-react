import './UserCard.css'

function UserCard(props) {
    return (
        <div className='Logo-card'>
            <img className="logo flex items-center justify-center" src={props.image} alt="Logo/Imagen"/>
            <h3>{props.name}</h3>
            <p>{props.country}</p>
        </div>
    )
}

export default UserCard
