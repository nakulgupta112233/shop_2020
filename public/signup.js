function signing()
{
    let username=$('#name').val();
    let password=$('#password').val();
    let cnfpass=$('#cnfpass').val();

    let x=document.getElementById("user").checked;
    let y=document.getElementById("vendor").checked;
    
    localStorage.unm = username; 
    if(password == cnfpass){
      if(x==true){
    $.post('/api/users',{
            name : username,
            password : password

          } , function (data){
            done(data)
          })}
          else if(y==true){
            $.post('/api/vendors',{
              name : username,
              password : password
  
            } , function (data){
              done(data)
            })
          }
         // if(localStorage.getItem('unm'))
          
          window.alert("signed up successfully login to continue ...");
          if(x==true)
          window.location.href = "login_user.html";
          else
          window.location.href = "login_admin.html";
}
else{
    window.alert("please enter the password again !!");

}

}


