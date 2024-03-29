// Completed By Devery
import React, { useState, useEffect } from "react";
import { addFriend, getAllFriends } from "./FriendManager";
import './NewFriendForm.css'
import { getNewFriend } from "./FriendManager";



// 
export const NewFriendForm = ({getFriends}) => {

    // const [isLoading, setIsLoading] = useState(false);

    // friendname = text---setFriendName sets state variable
    const [friendName, setFriendName] = useState("")


// as you tupe updates state variable friendName
    const handleControlledInputChange = (event) => {
        let newFriend =  friendName
        let selectedVal = event.target.value

        

        newFriend = selectedVal

        setFriendName(newFriend)
    }

    

    const handleClickSaveFriend = (event) => {
        event.preventDefault()
        getNewFriend(friendName).then( response => {
            const newFriend = {
                userId: response[0].id,
                currentUserId: parseInt(sessionStorage.getItem('nutshell_user'))

            }
            addFriend(newFriend)
            .then( () => {
                getFriends()
                setFriendName("")
            }
            )
        }
        )
    }


    return (
        <form className="friendForm">
            <h2 className="friendForm__title">New Friend:</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">UserName:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Username" value={friendName} />
                </div>
                <button className="btn btn-primary"
                    onClick={handleClickSaveFriend}>
                    Add Friend
                </button>
            </fieldset>
        </form>
    )
}
