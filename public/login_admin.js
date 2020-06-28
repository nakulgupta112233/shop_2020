
let inputusername = $('#vendorname').val()
let inputuserpassword = $('#Password').val()

function fetchVendors (done){
    $.get('/api/vendors' , function(data){
        done(data)
    })
}
function addVendor(name,password,done){
  $.post('/api/vendors', {
    name:name,
    password:password
  } , function (data){
    done(data)
  })
}


function calling(){

    let inputusername = $('#vendorname').val()
    let inputuserpassword = $('#Password').val()

    console.log("inside caling")
    let flag=false;
    //let productList = $('#product-list')
    fetchVendors(function(vendors){

        for(vendor of vendors){
            console.log(vendor.name);
            console.log(inputusername)
            console.log(vendor.password);
            console.log(inputuserpassword)
            

            if(vendor.name == inputusername && vendor.password == inputuserpassword )
            {
                
                flag=true;
                console.log("very nice");
            //productList.append(createProductCard(product))
                let cnf = window.confirm("are you sure you want to login using below credentials");
                
                if(cnf)
                {
                   
                    localStorage.currvendorid = vendor.v_id;
                    localStorage.vname=vendor.name;
                    
                    window.alert("login successfull");
                    window.alert("welcome back , " + vendor.name);
                    window.location.href = "index_4.html";
                    
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
if(localStorage.currvendorid)
document.getElementById('greet_user').innerHTML = "welcome back , " + localStorage.getItem('vname');
$('#logout').click(() => {
    console.log("inside logout")
  delete localStorage.currvendorid
  delete localStorage.vname

})
