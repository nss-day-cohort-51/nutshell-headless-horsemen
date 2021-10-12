// Completed By Devery
import React, { useState, useEffect} from "react";
import { FriendCard } from "./FriendCard";
import { getAllFriends, deleteFriend } from "./FriendManager";
import { NewFriendForm } from "./NewFriendForm";

export const FriendList = () => {
    const [friends, setFriends] = useState([]);
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
            </section>

            {friends?.map(friend => <FriendCard key={friend.id} friend={friend} handleDeleteFriend={handleDeleteFriend} />)}

            {/* allows get friends function to be used in newfriendsform */}
            <NewFriendForm getFriends={getFriends}/>

        </div>
        </>
    );
};