import React from "react";
import "./Friend.css";
import { Link, useHistory } from "react-router-dom";

export const FriendCard = ({friend, handleDeleteFriend}) => {
    const history = useHistory();
    return (
        <div className="card">
            <div className="card-content">
                <h4 className="friend_name">{friend?.user.name}</h4>
                <button className="friend_delete" type="button" onClick={() => handleDeleteFriend(friend.id)}>Delete Friend</button>
            </div>
        </div>
    );
}
