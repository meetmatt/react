import React, {useState} from "react"
import Friend from "../Friend/types/Friend"
import TextInput from "../Form/TextInput.tsx"
import SelectInput from "../Form/SelectInput.tsx"
import Button from "../Form/Button.tsx"

interface BillFormProps {
  selectedFriend: Friend
  onSplitBill: (_amount: number) => void
}

const BillForm: React.FC<BillFormProps> = ({selectedFriend, onSplitBill}) => {
  const [bill, setBill] = useState("")
  const [paidByUser, setPaidByUser] = useState("")
  const [whoIsPaying, setWhoIsPaying] = useState("user")
  const paidByFriend = Number(bill) - Number(paidByUser)

  function submitForm(event: React.SyntheticEvent) {
    event.preventDefault()
    onSplitBill(whoIsPaying == 'user' ? paidByFriend : Number(paidByUser) * -1)
  }

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    submitForm(event)
  }

  function handleSubmitClick(event: React.MouseEvent<HTMLButtonElement>) {
    submitForm(event)
  }

  function onBillChange(event: React.ChangeEvent<HTMLInputElement>) {
    setBill(event.target.value)
  }

  function onExpenseChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPaidByUser(event.target.value)
  }

  function onWhoIsPayingChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setWhoIsPaying(event.target.value)
  }

  return <form className="form-split-bill" onSubmit={handleFormSubmit}>
    <h2>Split a bill with {selectedFriend.name}</h2>
    <TextInput value={bill} onChange={onBillChange}>💰Bill value</TextInput>
    <TextInput value={paidByUser} onChange={onExpenseChange}>🧍🏻‍Your expense</TextInput>
    <TextInput value={paidByFriend} readonly={true} disabled={true}>👯‍♀️{selectedFriend.name}&#39;s expense</TextInput>
    <SelectInput
      value={whoIsPaying}
      options={{"user": "You", "friend": selectedFriend.name}}
      onChange={onWhoIsPayingChange}>
      🤑Who is paying the bill?
    </SelectInput>
    <Button onClick={handleSubmitClick}>Split the Bill</Button>
  </form>
}

export default BillForm
