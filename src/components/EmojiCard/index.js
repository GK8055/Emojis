// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiDetails, emojiClick} = props
  const {emojiName, emojiUrl, id} = emojiDetails
  const EmojiSelection = () => {
    emojiClick(id)
  }

  return (
    <li className="card_container">
      <button type="button" onClick={EmojiSelection}>
        <img src={emojiUrl} alt={emojiName} className="emoji_size" />
      </button>
    </li>
  )
}

export default EmojiCard
