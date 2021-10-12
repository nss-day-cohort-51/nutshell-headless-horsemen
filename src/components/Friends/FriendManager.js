// Completed By Devery
const remoteURL = "http://localhost:8088"



// gets id of friend
export const getFriendById = (friendId) => {
    //be sure your animals have good data and related to a location and customer
    return fetch(`${remoteURL}/Friends/${friendId}`)
    .then(res => res.json())
}


// fetches all friends
export const getAllFriends = () => {
    return fetch(`${remoteURL}/friends?_expand=user`)
    .then(res => res.json())
  }


// deletes friend from friends list
export const deleteFriend = (id) => {
    return fetch(`${remoteURL}/friends/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }


// will add friend 
  export const addFriend = (newFriend) => {
    return fetch(`${remoteURL}/friends`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newFriend)
    }).then(response => response.json())
  }

  
export const getNewFriend = (friendName) => {
  return fetch(`${remoteURL}/users?name=${friendName}`)
    .then(response => response.json())
}

  /*export const getNewFriend = () => {

  if (friends.name === "")
  .then (response => response.json())
  else {window.alert "Please select valid friend"}


  */