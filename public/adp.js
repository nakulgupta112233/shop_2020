
    /*if(localStorage.curruserid){
      document.getElementById("addpro").style.display = "none";
    }
    else{
      document.getElementById("addpro").style.display = "block";
    }*/
    function ab(){
      console.log("in checkout")
      delete localStorage.total

      $.ajax({
        url: '/api/carts/'+localStorage.curruserid+'',
        method: 'DELETE' ,
      }).done(function(data){
        console.log(data);
      });

      window.location.href="checkout.html";
    }
    function abc(){
      window.location.href="index_3.html";
    }
 
