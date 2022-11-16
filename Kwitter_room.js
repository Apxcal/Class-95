var firebaseConfig = {
  apiKey: "AIzaSyAUAwkZwjun4G8fIS2QaQ4XCmC0aYXY0zM",
  authDomain: "chatwebapp-2d4b0.firebaseapp.com",
  databaseURL: "https://chatwebapp-2d4b0-default-rtdb.firebaseio.com",
  projectId: "chatwebapp-2d4b0",
  storageBucket: "chatwebapp-2d4b0.appspot.com",
  messagingSenderId: "604022100189",
  appId: "1:604022100189:web:99807e9f6155ff86ec8b34"
};
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name = "+Room_names);
room="<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div>"
document.getElementById("room").innerHTML+=room;
//End code
});});}
getData();

user1=localStorage.getItem("username");
document.getElementById("username").innerHTML="Welcome "+user1+"!";