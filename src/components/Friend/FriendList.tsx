import React from "react";
import FriendListItem from "./FriendListItem.tsx";
import Friend from "./types/Friend";

interface FriendListProps {
  friends: Friend[],
  selectedFriend: Friend | null,
  onSelect: (_friend: Friend | null) => void,
}

const FriendList: React.FC<FriendListProps> = ({friends, selectedFriend, onSelect}) => {
  return <ul>
    {
      friends.map((friend: Friend) => (
        <FriendListItem key={friend.id} friend={friend} isSelected={friend === selectedFriend} onSelect={onSelect}/>
      ))
    }
  </ul>
}

export default FriendList
