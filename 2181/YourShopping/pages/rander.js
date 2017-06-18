var div = document.getElementById('app');
function randerProduct(){
    div.innerHTML = '';
    for(i=0;i<phone.length;i++){
        div.innerHTML += `
            <tr>
                <td><img src="${phone[i].src}" /></td>
                <td>${phone[i].name}</td>
                <td>${phone[i].disciption}</td>
                <td><input type="submit" value="add" onclick='addCart(phone,${i})'/></td>
            </tr>
        `
    }
}
function renderCart(){
    div.innerHTML = '';
    for(i=0;i<cartArr.length;i++){
        div.innerHTML += `
            <tr>
                <td><img src="${cartArr[i].src}" /></td>
                <td>${cartArr[i].name}</td>
                <td>${cartArr[i].disciption}</td>
                <td>${cartArr[i].qty}</td>
                <td><input type="submit" value="remove" onclick='removeCart(cartArr,${i})'/></td>
            </tr>
        `
    }
}