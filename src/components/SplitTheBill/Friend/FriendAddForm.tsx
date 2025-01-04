import React, {useState} from "react"
import TextInput from "../Form/TextInput.tsx"
import Button from "../Form/Button.tsx"
import Friend from "./types/Friend"

interface AddFriendProps {
  onAddFriend: (_friend: Friend) => void
}

const FriendAddForm: React.FC<AddFriendProps> = ({onAddFriend}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState<string>("")
  const [image, setImage] = useState<string>("https://i.pravatar.cc/48")

  function handleFormToggleClick() {
    setIsOpen((isOpen) => !isOpen)
  }

  function submitForm(event: React.SyntheticEvent) {
    event.preventDefault()
    const id = Math.floor(Math.random() * 100000)
    const newFriend: Friend = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0
    }
    onAddFriend(newFriend)
    setIsOpen(false)
    setName("")
  }

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    submitForm(event)
  }

  function handleSubmitButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    submitForm(event)
  }

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    setImage(event.target.value)
  }

  return <>
    {
      isOpen &&
      <form className="form-add-friend" onSubmit={handleFormSubmit}>
        <TextInput value={name} onChange={handleNameChange} autofocus={true}>👯‍♀️Friend name</TextInput>
        <TextInput value={image} onChange={handleImageChange}>🌄️Image URL</TextInput>
        <Button onClick={handleSubmitButtonClick}>Add</Button>
      </form>
    }
    <Button onClick={handleFormToggleClick}>{isOpen ? 'Close' : 'Add friend'}</Button>
  </>
}

export default FriendAddForm
