const TeamMembers = ({teamMember, darkMode}) => {
    return (
        <>
            <img src={teamMember.img} className={darkMode}></img>
            <h3>{teamMember.name}</h3>
            <h3>Strength: {teamMember.strength}</h3>
            <h3>Agility: {teamMember.agility}</h3>
        </>
    )
}

export default TeamMembers