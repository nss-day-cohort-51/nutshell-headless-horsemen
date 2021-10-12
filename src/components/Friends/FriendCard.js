// Completed By Devery
import React from "react";
import "./Friend.css";

export const FriendCard = ({friend, handleDeleteFriend}) => {
    return (
        <div className="card">
            <div className="card-content">
                <h4 className="friend_name">{friend?.user.name}</h4>
                <button className="friend_delete" type="button" onClick={() => handleDeleteFriend(friend.id)}>Delete Friend</button>
            </div>
        </div>
    );
}
