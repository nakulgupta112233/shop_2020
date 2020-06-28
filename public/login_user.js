/*$(() => {
  
    $('#login').click(() => {
        console.log("hello im clicked")
      $.post('/api/users',
        {
          name: $('#username').val(),
          password : $('#password').val()
        },
        (data) => {
          if (data.error) alert(data.error)
          else {
            alert(`Logged in as ${data.name}`)
            localStorage.userId = data.id
            
          }
        },
      )
    })
  
    $('#logout').click(() => {
        console.log("inside logout")
      delete localStorage.userId
   
    })
  })

*/


function fetchUsers (done){
    $.get('/api/users' , function(data){
        done(data)
    })
}
function addUser(name,password,done){
  $.post('/api/users', {
    name:name,
    password:password
  } , function (data){
    done(data)
  })
}
/*function createProductCard(product){
    return $(`
  <div class="card" style="width: 18rem; margin: 20px ; border-radius: 15px;">
  <img class="card-img-top" src="ph_1.png" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title"><b>${product.name}</b></h5>
    <p class="card-text">by   ${product.manufacturer}</p>

  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">price  :  Rs . ${product.price}</li>
    <li class="list-group-item">(+18% gst)=> Rs . <b>${product.price*0.18 + product.price}</b> (TOTAL)</li>
    
  </ul>
  <div class="card-body">
  <button type="button" class="btn btn-primary btn-block"> BUY </button>
  <button type="button" class="btn btn-primary btn-block">add to cart</button>
  </div>
</div>`
        )
}
*/
//window.onload = document.getElementById(“greet_user”).innerHTML = “Hello, World!”;

function calling(){

    let inputusername = $('#Username').val()
    let inputuserpassword = $('#Password').val()

    console.log("inside caling")
    let flag=false;
    //let productList = $('#product-list')
    fetchUsers(function(users){

        for(user of users){
            console.log(user.name);
            console.log(inputusername)
            console.log(user.password);
            console.log(inputuserpassword)
            

            if(user.name == inputusername && user.password == inputuserpassword )
            {
                
                flag=true;
                console.log("very nice");
            //productList.append(createProductCard(product))
                let cnf = window.confirm("are you sure you want to login using below credentials");
                
                if(cnf)
                {
                   
                    localStorage.curruserid = user.id;
                    localStorage.name=user.name;
                    window.alert("login successfull");
                    window.alert("welcome back , " + user.name);
                    window.location.href = "index_3.html";
                    
                    break;
                    
                 
                }
            }
            else
            {
                console.log("very bad");
            }
            
        }
        if(flag==false)
            window.alert("please enter valid credentials or signup if you dont have an account");
    })

}
if(localStorage.curruserid)
document.getElementById('greet_user').innerHTML = "welcome back , " + localStorage.getItem('name');
$('#logout').click(() => {
    console.log("inside logout")
  delete localStorage.curruserid
  delete localStorage.name
  delete localStorage.total

})

/*$(function (){
    let pname=$('#productname')
    let manufname=$('#manufacturername')
    let proprice=$('#price')
    $('#btnadd').click(function (){
        addProduct(
            pname.val(),
            manufname.val(),
            proprice.val(),
            function(addedProduct){
                window.alert("added "+addedProduct.name + " to shop")
            }
        )
    })
})*/