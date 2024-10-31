import { useState } from 'react'
import ZombieFighter from './components/ZombieFighter'
import TeamMembers from './components/TeamMembers'
import './App.css'

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false)

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
      img: 'src/icons/survivor.png'
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'src/icons/scavenger.png',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'src/icons/shadow.png',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'src/icons/tracker.png',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'src/icons/sharpshooter.png',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'src/icons/medic.png',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'src/icons/engineer.png',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'src/icons/brawler.png',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'src/icons/infiltrator.png',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'src/icons/leader.png',
    },
  ]
  )

  const handleAddFighter = (fighter) => {
    money >= fighter.price ? (setTeam([...team, fighter]), setMoney(money - fighter.price), setTotalStrength(totalStrength + fighter.strength), setTotalAgility(totalAgility + fighter.agility)) : alert('Not enough money to add this fighter')
  }

  const handleRemoveFighter = (teamMember) => {
    const index = team.findIndex((member) => member === teamMember);
  
    index !== -1 
      ? (setMoney(money + teamMember.price),
         setTotalStrength(totalStrength - teamMember.strength),
         setTotalAgility(totalAgility - teamMember.agility),
         setTeam([...team.slice(0, index), ...team.slice(index + 1)]))
      : alert("Team member not found");
  };
  
  const handleDarkMode = () => {
    console.log('darkMode!')
    setIsDarkMode(true)
    console.log(isDarkMode)
  }

  const handleLightMode = () => {
    console.log('lightMode')
    setIsDarkMode(false)
    console.log(isDarkMode)
  }

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <div className='header'>
        <div className='darkmode-buttons'>
          <button onClick={handleDarkMode}>Dark mode</button>
          <button onClick={handleLightMode}>Light mode</button>
        </div>
        <div className="team-stats">
          <h2>Money: {money}</h2>
          <h2>Strength: {totalStrength}</h2>
          <h2>Agility: {totalAgility}</h2>
        </div>
      </div>
      <div className="main">
        <div>
          <h2>Team:</h2>
          {team.length === 0 ? 
            (<p>Pick some team members!</p>)
          :
            <ul>
              {team.map((teamMember, index) => (
                <li key={index}>
                  <TeamMembers teamMember={teamMember} darkMode={isDarkMode ? 'light-img' : 'dark-img'} />
                  <button onClick={() => handleRemoveFighter(teamMember)} type="button">Remove</button>
                </li>
              ))}
            </ul>
          }
        </div>
        <div>
          <h2>Fighters</h2>
          <ul>
            { zombieFighters.map((fighter) => (
              <li key={fighter.name}>
                <ZombieFighter fighter={fighter} darkMode={isDarkMode ? 'light-img' : 'dark-img'} />
                <button onClick={() => handleAddFighter(fighter)} type="button">Add</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <h6><a href="https://www.flaticon.com/free-icons/healthcare" title="icons">All icons created by srip - Flaticon</a></h6>
    </div>
  )
}

export default App
