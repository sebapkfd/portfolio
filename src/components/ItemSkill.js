const ItemSkill = ({ skill: {name, logo}}) => {
    return (
        <div>
            <img src={logo} alt={name}/>
            <p>{name}</p>
        </div>
    )
}

export default ItemSkill;