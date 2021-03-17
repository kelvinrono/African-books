

var form = document.getElementsById('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
})


function validate() {
      
	if( document.myForm.name.value == "" ) {
	   alert( "Please provide your name!" );
	   document.myForm.name.focus() ;
	   return false;
	}
	if( document.myForm.password.value == "" ) {
	   alert( "Please provide your password!" );
	   document.myForm.password.focus() ;
	   return false;
	}
	
	return( true );
 }



 function register() {
	 var name = document.myform.newName.value
      var pass = document.myform.newPassword.value
	  var pass2 = document.myform.confirmPassword.value
	if( name  == "" ) {
	   alert( "Please provide your name!" );
	   document.myform.name.focus() ;
	   return false;
	}
	else if( pass == "" ) {
	   alert( "Please provide your password!" );
	   document.myform.password.focus() ;
	   return false;
	}
	else if(pass!==pass2){
		alert("password do not match")
		document.myform.confirmPassword.focus();
		return false;
	}

	else if(pass.lenght<4){
		alert ("password too short")
		document.myform.password.focus() ;
		return false;
	}
	 else {
		 return( true );
	 }
 }


//  var newName= document.getElementById('name').value;
// var password = document.getElementById('password').value

// var people = [
//     { 
//     username: 'kelvin',
//     password:'kelvin'

//     },
//     {
//         username: 'anne',
//         password: 'anne'
//     }
    
// ]

// function login (){

// var name= document.getElementsByName('name').value
// var password = document.getElementById('password').value

//     for(var i=0;i<people.length;i++){
//         if (username==people[i].username && password==people[i].password){
//             console.log(username+ "You are logged in")
//             return
//         }
//     }
// }


// function register(){
//     var newUser= document.getElementById('newName').value;
//     var newPassword = document.getElementsById('newPassword').value;
//      var newUser= {
//         username:newUser,
//         password: newPassword
//      }

//      people.push(newUser)

//      return true;
// }