import {Component} from 'react'

import './index.css'

import EmojiCard from '../EmojiCard'

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {isGameInProgress: true, clickedEmojiList: [], topScore: 0}

  finishGameAndShowScoreCard = currentScore => {
    const {topScore} = this.state
    let newtopScore = topScore
    if (currentScore > topScore) {
      newtopScore = currentScore
    }
    this.setState({topScore: newtopScore, isGameInProgress: false})
  }

  resetGame = () => {
    this.setState({clickedEmojiList: [], isGameInProgress: true})
  }

  renderingScoreCard = () => {
    const {clickedEmojiList} = this.state
    const {emojiList} = this.props
    const isWon = clickedEmojiList.length === emojiList.length
    return (
      <WinOrLoseCard
        playAgain={this.resetGame}
        isWon={isWon}
        score={clickedEmojiList.length}
      />
    )
  }

  clickEmoji = id => {
    const {clickedEmojiList} = this.state
    const {emojiList} = this.props
    const isEmojiPresent = clickedEmojiList.includes(id)

    if (isEmojiPresent) {
      this.finishGameAndShowScoreCard(clickedEmojiList.length)
    } else {
      if (emojiList.length - 1 === clickedEmojiList.length) {
        this.finishGameAndShowScoreCard(emojiList.length)
      }
      this.setState(prev => ({
        clickedEmojiList: [...prev.clickedEmojiList, id],
      }))
    }
  }

  getRandomEmojis = () => {
    const {emojiList} = this.props

    return emojiList.sort(() => Math.random() - 0.5)
  }

  renderingEmojiList = () => {
    const suffledEmojis = this.getRandomEmojis()

    return (
      <ul className="unOrderedList">
        {suffledEmojis.map(each => (
          <EmojiCard
            key={each.id}
            emojiClick={this.clickEmoji}
            emojiDetails={each}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {topScore, clickedEmojiList, isGameInProgress} = this.state

    return (
      <div className="app_container">
        <NavBar
          topScore={topScore}
          isGameInProgress={isGameInProgress}
          currentScore={clickedEmojiList.length}
        />
        <div className="emoji_body">
          {isGameInProgress
            ? this.renderingEmojiList()
            : this.renderingScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
