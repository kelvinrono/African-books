// var form = document.getElementsById('form');
// form.addEventListener('submit', function(event){
//     event.preventDefault();
// })

var name= document.getElementById('name').value;
var password = document.getElementById('password')

function validate(){
    
    var name= document.getElementById('name').value; 

    if(name==='' || password===''){
        //alert("name cannot be empty")
        document.getElementById('error').innerHTML='Please fill all the fields'
        return false;
    }
    else if(name===''){
        //alert("name cannot be empty")
        document.getElementById('error').innerHTML='Fill in your name'
        return false;
    }

    else if(name.lenght<5){
        //alert("name cannot be empty")
        document.getElementById('error').innerHTML='Name cannot be less than 5 characters'
        return false;
    }
    else{
        return true
    }
}
