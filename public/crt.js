function fetchProducts_2 (done){
  $.get('/api/carts/'+localStorage.curruserid+'' , function(data){
      done(data)
  })
}


function dododo(){

   window.location.href="cart.html"
   fetchProducts_2(function(products){

   
       localStorage.total_1=0;
       for(product of products){
           //productList.append(createProductCard(product))
           localStorage.total_1=Number(localStorage.total_1)+(product.price*product.quantity);
       }}
   )

document.getElementById('tot').innerHTML ='TOTAL : ₹​ ' + localStorage.total;
   document.getElementById('tota').innerHTML ='( + 18% GST ) : ₹​ ' + localStorage.total*0.18;
   document.getElementById('total').innerHTML ='YOU PAY : ₹​ ' + (Number(localStorage.total) + Number(parseFloat((localStorage.total*0.18) ).toFixed(2)));
   document.getElementById('total_1').innerHTML ='YOU PAY : ₹​ ' + (Number(localStorage.total) + Number(parseFloat((localStorage.total*0.18) ).toFixed(2)));
   
  }

function incr_2(P_id,qua){
  console.log(P_id)
  console.log(qua)
  $.ajax({
    url: '/api/carts/inc/'+P_id+'/'+qua+'',
    method: 'PUT' ,
  }).done(function(data){
    //document.getElementById('tot').innerHTML ='TOTAL : ₹​ ' + localStorage.total;
    console.log(data);
  });



}
function decr_2(P_id,qua){
  console.log(P_id)
  console.log(qua)
  $.ajax({
    url: '/api/carts/dec/'+P_id+'/'+qua+'',
    method: 'PUT' ,
  }).done(function(data){
    console.log(data);
  });

}
function incr(P_id , qua){
 // window.localStorage.total=(Number(window.localStorage.total)+Number(window.localStorage.total));
 $.when(incr_2(P_id,qua)).then(dododo());
 window.location.href="cart.html"

}


function decr(P_id , qua){
 // window.localStorage.total=(Number(window.localStorage.total)-Number(window.localStorage.total));
 $.when(decr_2(P_id,qua)).then(dododo());
 window.location.href="cart.html"
}
function fetchProducts (done){
    $.get('/api/carts/'+localStorage.curruserid+'' , function(data){
        done(data)
    })
}
localStorage.total=0
function createProductCard(product){
    localStorage.total=Number(localStorage.total)+ (product.price*product.quantity)
    return $(`
    <tr>
							<td data-th="Product">
								<div class="row">
									<div class="col-sm-2 hidden-xs"><img src="ph_1.png" alt="..." class="img-responsive"/></div>
									<div class="col-sm-10">
										<h4 class="nomargin"style="font-weight:600">${product.name}</h4>
										<p >by <b>${product.manufacturer}</b></p>
									</div>
								</div>
							</td>
							<td data-th="Price" style="font-weight:500;font-size:medium">₹​ ${product.price}</td>
							<td data-th="Quantity"style="font-weight:600;font-size:medium">
								   ${product.quantity}
							</td>
							<td data-th="Subtotal" class="text-center"style="font-weight:500;font-size:medium">₹​ ${(product.price)*product.quantity}</td>
							<td class="actions" data-th="">
								<button class="btn btn-info btn-sm" id=${product.P_id} value=${product.quantity} onclick="incr(this.id,this.value)"><i class="fa fa-plus"></i></button>
								<button class="btn btn-danger btn-sm" id=${product.P_id} value=${product.quantity} onclick="decr(this.id,this.value)"><i class="fa fa-trash-o"></i></button>								
							</td>
                        </tr> `
        )
}

$ (function(){
    let productList = $('#cart_table')
    fetchProducts(function(products){
        productList.empty()
        for(product of products){
            productList.append(createProductCard(product))
        }
        document.getElementById('tot').innerHTML ='TOTAL : ₹​ ' + localStorage.total;
   document.getElementById('tota').innerHTML ='( + 18% GST ) : ₹​ ' + localStorage.total*0.18;
   document.getElementById('total').innerHTML ='YOU PAY : ₹​ ' + (Number(localStorage.total) + Number(parseFloat((localStorage.total*0.18) ).toFixed(2)));
   document.getElementById('total_1').innerHTML ='YOU PAY : ₹​ ' + (Number(localStorage.total) + Number(parseFloat((localStorage.total*0.18) ).toFixed(2)));
       //dododo()
        
    })
})

/*function findv_id(P_id,done){
  $.get('/api/products/pid/'+P_id+'', function(datas){
    done(datas)
  })
}

function buynow(idid){
  var vid;
  var price;
  findv_id(idid,function(carts){
    for(dat of carts){
    //console.log(dat.price)
     vid=dat.v_id;
     pric=dat.price;


     if(localStorage.curruserid){
     // console.log(idid)
      //console.log(vid)
      //console.log(pric)
   
      $.post('/api/carts' ,{
        P_id:idid,
        id:localStorage.curruserid,
        v_id: vid,
        price: pric
   
      } )
     }
     else{
       window.alert("login to buy products");
     }

    }
     
  })
 
}
*/