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
}
