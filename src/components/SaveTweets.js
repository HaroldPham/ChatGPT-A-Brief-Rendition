import React from 'react';
import { useState } from 'react';
//import the function from the realtime database module
import { getDatabase, ref } from 'firebase/database';

//get a reference to the database service
// const db = getDatabase();

//get reference to the "text" property in the database
// const textTweet = ref(db, "text");

//A component like PetList to hold PetCards
function FolderList(props) {
  //folderId and folderName DO NOT CHANGE, only refer to them to change folderContents.
  const [folders, setFolders] = useState(
    [
      { "folderId": 1, "folderName": "Good Tweets", "folderContents": { "tweetId:": 1, "tweetContent": "" } },
      { "folderId": 2, "folderName": "Bad Tweets", "folderContents": { "tweetId:": 2, "tweetContent": "" } }
    ]);

  function handleFolderClick() {

  }
  
  return (
    <div className='folderList'>
      <button onClick={handleFolderClick}>Good Tweets</button>
      <button onClick={handleFolderClick}>Bad Tweets</button>
    </div>
  )
}

export default function SaveTweets(props) {
  return (
    <div className="container">
      <h2>Save Your Tweets!</h2>
      <FolderList />
    </div>
  );
}