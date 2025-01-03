import React, {useState} from "react";
import Friend from "./Friend/types/Friend";
import FriendList from "./Friend/FriendList.tsx";
import FriendAddForm from "./Friend/FriendAddForm.tsx";
import BillForm from "./Bill/BillForm.tsx";

const initialFriends: Friend[] = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
]

const SplitTheBill: React.FC = () => {
  const [friends, setFriends] = useState<Friend[]>(initialFriends.slice())
  const [selectedFriend, setSelectedFriend] = useState<null | Friend>(null)

  function handleAddFriend(friend: Friend) {
    setFriends((friends: Friend[]) => {
        return [...friends, friend]
      }
    )
  }

  function handleFriendSelect(selectedFriend: Friend | null) {
    setSelectedFriend(selectedFriend)
  }

  function handleSplitBill(amount: number) {
    setFriends((friends: Friend[]) => {
        return friends.map((friend: Friend) => {
          return friend == selectedFriend ? {...friend, balance: friend.balance + amount} : friend
        })
      }
    )
    setSelectedFriend(null)
  }

  return <div className="app">
    <div className="sidebar">
      <FriendList
        friends={friends}
        selectedFriend={selectedFriend ?? null}
        onSelect={handleFriendSelect}
      />
      <FriendAddForm onAddFriend={handleAddFriend}/>
    </div>
    {selectedFriend && <BillForm selectedFriend={selectedFriend} onSplitBill={handleSplitBill}/>}
  </div>
}

export default SplitTheBill
