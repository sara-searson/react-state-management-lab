import { useState } from 'react'
import ZombieFighter from './components/ZombieFighter'
import TeamMembers from './components/TeamMembers'
import './App.css'

const App = () => {

  const [team, setTeam] = useState([])

  const [money, setMoney] = useState(100)

  const [totalStrength, setTotalStrength] = useState(0)

  const [totalAgility, setTotalAgility] = useState(0)

  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]
  )

  const handleAddFighter = (fighter) => {
    money >= fighter.price ? (setTeam([...team, fighter]), setMoney(money - fighter.price), setTotalStrength(totalStrength + fighter.strength), setTotalAgility(totalAgility + fighter.agility)) : alert('Not enough money to add this fighter')
  }

  const handleRemoveFighter = (teamMember) => {
    setMoney(money + teamMember.price), setTotalStrength(totalStrength - teamMember.strength), setTotalAgility(totalAgility - teamMember.agility),
    setTeam(team.filter((fighter) => fighter !== teamMember))
  }

  return (
    <div>
      <h1>Money: {money}</h1>
      <h1>Strength: {totalStrength}</h1>
      <h1>Agility: {totalAgility}</h1>
      <h1>Team:</h1>
      {team.length === 0 ? 
        (<p>Pick some team members!</p>)
      :
        <ul>
          {team.map((teamMember, index) => (
            <li key={index}>
              <TeamMembers teamMember={teamMember} />
              <button onClick={() => handleRemoveFighter(teamMember)} type="button">Remove</button>
            </li>
          ))}
        </ul>
      }
      <h1>Fighters</h1>
      <ul>
        { zombieFighters.map((fighter) => (
          <li key={fighter.name}>
            <ZombieFighter fighter={fighter} />
            <button onClick={() => handleAddFighter(fighter)} type="button">Add</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
