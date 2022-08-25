// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBydEraUlvx1Ob3toHdU8jqtFeNXBl_BQo",
      authDomain: "kwitter-e0477.firebaseapp.com",
      databaseURL: "https://kwitter-e0477-default-rtdb.firebaseio.com",
      projectId: "kwitter-e0477",
      storageBucket: "kwitter-e0477.appspot.com",
      messagingSenderId: "189297064370",
      appId: "1:189297064370:web:59b9c485c55bbcdf91ccab"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function addroom()
{
      room_name=document.getElementById("addroom").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"Ranu"
      });
      localStorage.setItem("00",roomname);
      window.location="kwitter_page.HTML";
}

function redirectroom(name)
{
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.HTML";
}