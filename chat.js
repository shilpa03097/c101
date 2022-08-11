// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBO5WqWptxw2p_xHQPA7QP9NQmyPY2ard4",
    authDomain: "lets-chat-5f1da.firebaseapp.com",
    projectId: "lets-chat-5f1da",
    storageBucket: "lets-chat-5f1da.appspot.com",
    messagingSenderId: "264406209848",
    appId: "1:264406209848:web:fa3dac724394ed073c9dcd"
  };
  
  
   firebase app = initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



