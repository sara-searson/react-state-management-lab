const ZombieFighter = ({fighter, darkMode}) => {
    return (
        <>
            <img src={fighter.img} className={darkMode}></img>
            <h3>{fighter.name}</h3>
            <h3>Price: {fighter.price}</h3>
            <h3>Strength: {fighter.strength}</h3>
            <h3>Agility: {fighter.agility}</h3>
        </>
    )
}

export default ZombieFighter