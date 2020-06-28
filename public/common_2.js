
let curvenid=localStorage.currvendorid;

function fetchProducts (done){
    
    $.get('/api/products/'+curvenid+'' , function(data){  
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
  <div class="card" style="width: 18rem; margin: 20px ; border-radius: 15px; box-shadow:grey 2px 2px 10px 2px;">
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
  <button type="button" id="${product.P_id}" class="btn btn-primary btn-block" onclick="remov(this.id)"> REMOVE ITEM </button>
  <button type="button"  disabled class="btn btn-primary btn-block">ADD ITEM QUANTITY</button>
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
function remov(P_id){
  console.log(P_id)
  $.ajax({
    url: '/api/products/'+P_id+'',
    method: 'DELETE' ,
  }).done(function(data){
    console.log(data);
  });

  window.alert("product removed successfully")
  window.location.href="index_4.html";
 }


