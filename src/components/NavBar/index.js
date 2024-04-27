// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <nav className="nav_container">
      <div className="logo_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="emoji_logo_size"
          alt="emoji logo"
        />
        <p className="heading">Emoji Game</p>
      </div>
      {isGameInProgress && (
        <div className="score_container">
          <p className="text">Score {currentScore}</p>
          <p className="text">Top Score {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
