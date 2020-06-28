$(function (){
    let pname=$('#productname')
    let manufname=$('#manufacturername')
    let proprice=$('#price')
    let flag=false;
    $('#btnadd').click(function (){
        flag=true;
        addProduct(
            pname.val(),
            manufname.val(),
            proprice.val(),
            localStorage.getItem('currvendorid'),
           // function(addedProduct){
                
           // }
        )
        
        window.alert("added "+pname.val() + " to shop")
       
    })

    
})

function func(){
    
        window.location.href="index_4.html";
}