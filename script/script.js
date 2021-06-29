var x = document.getElementById("login")
var y = document.getElementById("register")
var z = document.getElementById("id1")

function register()
{
    x.style.left = "-400px"
    y.style.left = "50px"
    z.style.left= "110px"

}

function login()
{
    x.style.left = "50px"
    y.style.left = "450px"
    z.style.left= "0"

}


function valid()
{
    var username = document.getElementById('username').value
    var reg = /(^[A-Z ][a-z]+$)/gi;
    var res = reg.test(username);
    if(res)
    {
        alert("username accepted");
        return true
    }
    else
    {
        alert("username accepts only chars");
        return false

    }
}


function valid1()
{
        var password1 = document.getElementById("password1").value
        var cpassword = document.getElementById("cpassword").value
        if(password1 == cpassword)
        {
            alert("password matching");
            return true
        }
        else
        {
            alert("password is not matching");
            return false
        }
    }
    
    