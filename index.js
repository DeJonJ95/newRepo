let username2;
console.log(username2)

document.getElementById("myButton2").onclick = function (){
    username2 = document.getElementById("myText2").value;
    console.log(username2)
    document.getElementById("myLabel2").innerHTML = "Hello " + username2;
     }

let email;
console.log(email)
     
document.getElementById("myButton2").onclick = function (){
         email = document.getElementById("myEmail").value;
         console.log(email)
         document.getElementById("formifemail").innerHTML = "Hello " + email;
          }

          
     