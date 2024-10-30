const ZombieFighter = ({fighter}) => {
    return (
        <>
            <img src={fighter.img}></img>
            <h3>{fighter.name}</h3>
            <h3>Price: {fighter.price}</h3>
            <h3>Strength: {fighter.strength}</h3>
            <h3>Agility: {fighter.agility}</h3>
        </>
    )
}

export default ZombieFighter