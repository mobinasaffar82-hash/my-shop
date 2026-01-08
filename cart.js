let cart = JSON.parse(localStorage.getItem('cart')) || {};

function addToCart(name, price){
    if(cart[name]){
        cart[name].qty++;
    } else {
        cart[name] = {price: price, qty:1};
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(name + " به سبد اضافه شد!");
}

function updateCartCount(){
    document.querySelectorAll('#cart-count').forEach(el => {
        el.innerText = Object.keys(cart).length;
    });
}

function updateCartTable(){
    let table = document.getElementById('cart-table');
    if(!table) return;
    table.innerHTML = '<tr><th>نام محصول</th><th>تعداد</th><th>قیمت</th></tr>';
    let total = 0;
    for(let key in cart){
        let row = table.insertRow();
        row.insertCell(0).innerText = key;
        row.insertCell(1).innerText = cart[key].qty;
        let price = cart[key].price * cart[key].qty;
        total += price;
        row.insertCell(2).innerText = price + " تومان";
    }
    let cartTotal = document.getElementById('cart-total');
    if(cartTotal) cartTotal.innerText = "جمع کل: " + total + " تومان";
}

updateCartCount();
updateCartTable();
