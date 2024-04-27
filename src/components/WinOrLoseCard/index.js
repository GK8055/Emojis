// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, playAgain} = props
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const gameLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="card_container">
      <div className="text_container">
        <p className="heading">{gameStatus}</p>
        <p className="text">{gameLabel}</p>
        <p className="text_1">{score}/12</p>
        <button className="btn_1" type="button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <div className="image_container">
        <img src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
