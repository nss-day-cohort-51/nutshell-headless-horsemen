import React from "react";
import "./Friend.css";
import { Link, useHistory } from "react-router-dom";

export const FriendCard = ({friend, handleDeleteFriend}) => {
    const history = useHistory();
    return (
        <div className="card">
            <div className="card-content">
                <h4>{friend?.user.name}</h4>
                <button type="button" onClick={() => handleDeleteFriend(friend.id)}>Delete Friend</button>
            </div>
        </div>
    );
}
