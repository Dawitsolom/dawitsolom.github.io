function calcTip() {

    // Enter your code here to make Tip Calculator work
    var subtotal= Number( document.getElementById("subtotal").value);
         var tip = Number(  document.getElementById("tip").value);
         var total = subtotal + (subtotal * (tip/100));
         document.getElementById("total").innerHTML = "$ "+ total;
         
    }