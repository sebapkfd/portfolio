const ItemSkill = ({skill}) => {
    const {name, logo} = skill;
    return (
        <div>
            <img src={logo} alt={name}/>
            <p>{name}</p>
        </div>
    )
}

export default ItemSkill;