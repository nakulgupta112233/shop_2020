function fetchProducts_2 (done){
  $.get('/api/carts/'+localStorage.curruserid+'' , function(data){
      done(data)
  })
}


function dododo(){


   fetchProducts_2(function(products){
       localStorage.total_2=0;
       for(product of products){
           //productList.append(createProductCard(product))
           localStorage.total_2=Number(localStorage.total_2)+(product.price*product.quantity);
       }
   })
//document.getElementById('tot').innerHTML ='TOTAL : ₹​ ' + localStorage.total_2;
  // document.getElementById('tota').innerHTML ='( + 18% GST ) : ₹​ ' + localStorage.total_1*0.18;
   //d/ocument.getElementById('total').innerHTML ='YOU PAY : ₹​ ' + (Number(localStorage.total_1) + Number(parseFloat((localStorage.total_1*0.18) ).toFixed(2)));
   //document.getElementById('total_1').innerHTML ='YOU PAY : ₹​ ' + (Number(localStorage.total_1) + Number(parseFloat((localStorage.total_1*0.18) ).toFixed(2)));
   
}

function fetchProducts (done){
    $.get('/api/products' , function(data){
        done(data)
    })
}
function addProduct(name,manu,price,v_id,done){
  $.post('/api/products', {
    name:name,
    manufacturer:manu,
    price:price,
    v_id:v_id
  } , function (data){
    done(data)
  })
}
function createProductCard(product){
    return $(`
  <div class="card" style="width: 18rem; margin: 25px ; border-radius: 15px; box-shadow:grey 2px 2px 10px 2px;">
  <img class="card-img-top" src="ph_1.png" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title"><b>${product.name}</b></h5>
    <p class="card-text">by   ${product.manufacturer} + ${product.v_id}</p>

  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">price  :  Rs . ${product.price}</li>
    <li class="list-group-item">(+18% gst)=> Rs . <b>${product.price*0.18 + product.price}</b> (TOTAL)</li>
    
  </ul>
  <div class="card-body">
  <button type="button" id="${product.P_id}" class="btn btn-primary btn-block" onclick="buynow(this.id)"> BUY </button>
  <button type="button" id="qq" disabled class="btn btn-primary btn-block">add to cart</button>
  </div>
</div>`
        )
}

$ (function(){
    let productList = $('#product-list')
    fetchProducts(function(products){
        productList.empty()
        for(product of products){
            productList.append(createProductCard(product))
        }
    })
})

function findv_id(P_id,done){
  $.get('/api/products/pid/'+P_id+'', function(datas){
    done(datas)
  })
}


function bn_2(idid){
  var vid;
  var pric;
  var P_name;
  var P_manuf;
  findv_id(idid,function(carts){
    for(dat of carts){
    console.log(dat.price)
     vid=dat.v_id;
     pric=dat.price;

     P_name=dat.name;
     P_manuf=dat.manufacturer;
     localStorage.total= Number(localStorage.total )+ pric;
     console.log(P_name)
     console.log(P_manuf)
     if(localStorage.curruserid){
     // console.log(idid)
      //console.log(vid)
      //console.log(pric)
   
      $.post('/api/carts' ,{
        P_id:idid,
        id:localStorage.curruserid,
        v_id: vid,
        price: pric,
        name:P_name,
        manufacturer:P_manuf
   
      } )
      
     }
     else{
       window.alert("login to buy products");
     }

    }
     
  })
}
function buynow(idid){
  $.when(bn_2(idid)).then(dododo());
 //window.location.href="index_3.html"
 
}
