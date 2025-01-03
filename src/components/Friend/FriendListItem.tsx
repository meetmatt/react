import React from "react"
import Button from "../Form/Button.tsx"
import Friend from "./types/Friend"

interface FriendProps {
  friend: Friend
  isSelected: boolean
  onSelect: (_friend: Friend | null) => void
}

const FriendListItem: React.FC<FriendProps> = ({friend, isSelected, onSelect}) => {
  const {balance, image, name} = friend

  function handleButtonClick() {
    if (isSelected) {
      onSelect(null)
    } else {
      onSelect(friend)
    }
  }

  return <li className={isSelected ? 'selected' : ''}>
    <img src={image} alt={name}/>
    <h3>{name}</h3>
    {
      balance != 0
        ? <p className={balance < 0 ? 'red' : 'green'}>
          {balance < 0 ? `You owe ${name} ${balance * -1}€` : `${name} owes you ${balance}€`}
        </p>
        : <p>You and {name} are even</p>
    }
    <Button onClick={handleButtonClick}>{isSelected ? 'Close' : 'Select'}</Button>
  </li>
}

export default FriendListItem
