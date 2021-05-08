 function validate()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(username =="admin"&& password=="12345")
    {
        alert("Login Successfully");
        window.location="todo.html";
        return false;
    }
    else {
        alert ("login unsuccessful");
    }
    }

