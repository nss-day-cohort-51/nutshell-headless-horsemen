import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { addFriend, getAllFriends } from "./FriendManager";
import './NewFriendForm.css'

export const NewFriendForm = () => {
    const [friend, setFriend] = useState({
        id: 0,
        userId: 0,
        currentUserId: 0
    });
    const [isLoading, setIsLoading] = useState(false);

    const [friends, setFriends] = useState([])

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newFriend = { ...friend }
        let selectedVal = event.target.value
        



        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newFriend[event.target.id] = selectedVal

        setFriend(newFriend)
    }

    useEffect(() => {
        getAllFriends().then(friends => {
            setFriend(friends)
        })
    }, []);

    const handleClickSaveFriend = (event) => {
        event.preventDefault()

        const friendId = friend.friendId

        if (friendId === 0) {
            window.alert("Please select a friend")
        } else {
            addFriend(friend)
                .then(() => history.push("/friends"))
        }
    }

    return (
        <form className="friendForm">
            <h2 className="friendForm__title">New Friend</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">UserName:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Username" value={friend.name} />
                </div>
                <button className="btn btn-primary"
                    onClick={handleClickSaveFriend}>
                    Add Friend
                </button>
            </fieldset>
        </form>
    )
}
