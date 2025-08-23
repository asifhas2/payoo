const pin = 1234;
const pinNumbers = parseInt(pin)
document.getElementById("addMoneyBtn").addEventListener("click",function(e){
    e.preventDefault()
   const bankValu = document.getElementById("bank").value;
   const accountNumber = document.getElementById("account number").value;
   const addAmount = parseInt(document.getElementById("add amount").value);
   const pinNumber = parseInt(document.getElementById("pin number").value);
   const amountValue = parseInt(document.getElementById("amount").innerText);

   if(accountNumber.length<11){
    alert("account number do not mach");
    return;
   }
   if(pinNumber !== pinNumbers){
    alert("enter your right pin number")
    return;
   }

   const allAmount = addAmount + amountValue;
   document.getElementById("amount").innerText = allAmount;
})