var admin= "singhkunal@gmail.com"
var pss="kunal567"
        function login() {
            
            var username = document.getElementById("username").value;
            var password = document.getElementById("pass").value;
          console.log(username)
            
            if (username === admin && password === pss) {
                
                window.location.href="index.html";
                alert("Login Success")
            } else {
                
                alert("Incorrect login information. Please try again.");
            }
        }

        document.getElementById("btn").addEventListener("click",login ) 

       