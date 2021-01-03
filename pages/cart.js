function str(storageItem, value){
    value = JSON.stringify(value);
    localStorage.setItem(storageItem, value)
}
if(!localStorage.getItem('cart')){
    var cartArr = [];
    str('cart', cartArr);
}else{
    var cartArr= JSON.parse(localStorage.getItem("cart"))
}

function addCart(array,ind){
    var bul = true;
    for(i=0;i<cartArr.length;i++){
        if(array[ind].name == cartArr[i].name){
            cartArr[i].qty++;
            bul = false;
        }
    }
    if(bul){
        cartArr.push(array[ind]);
    }
    // cartArr.push(array[ind])
    str('cart', cartArr);
}
function removeCart(array,ind){
    array.splice(ind,1)
    str('cart', cartArr);
    renderCart();
}