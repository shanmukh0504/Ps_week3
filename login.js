var People=[
    {
        username:"Shanmukh",
        password:"shanmukh@1"
    },
    {
        username:"Vishal",
        password:"vishal@2"
    },
    {
        username:"Harini",
        password:"harini@3"
    },
    {
        username:"Vinay",
        password:"vinay@4"
    },
    {
        username:"Rajesh",
        password:"rajesh@5"
    }
]

function valid(){
    var username=document.getElementById("username").value
    var password=document.getElementById("password").value
    for(i=0;i<People.length;i++){
        if(username == People[i].username && password == People[i].password){
            console.log(username+" is successfully logged in!!!")
            alert(username+" Logged in successfully!!!")
            break
        }
        else{
            console.log("Incorrect username or password")
            alert("Incorrect login credentials!!!")
            break
        }
    }
}
