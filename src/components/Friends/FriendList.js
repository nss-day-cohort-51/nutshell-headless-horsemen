import React, { useState, useEffect} from "react";
import { FriendCard } from "./FriendCard";
import { getAllFriends, getFriendById, deleteFriend } from "./FriendManager";
import { useHistory } from "react-router";

export const FriendList = () => {
    const [friends, setFriends] = useState([]);
    const history = useHistory();
    const getFriends = () => {
        return getAllFriends().then(friendsFromApi => {
            setFriends(friendsFromApi)
        });
    };

    useEffect(() => {
        getFriends();
    }, []);

    const handleDeleteFriend = id => {
        deleteFriend(id)
        .then(() => getAllFriends().then(setFriends));
    };

    return (
        <>
        <div className="container-cards">
            <section className="section-content">
                <button type="button">

                </button>
            </section>

            {friends?.map(friend => <FriendCard key={friend.id} friend={friend} handleDeleteFriend={handleDeleteFriend} />)}

        </div>
        </>
    );
};