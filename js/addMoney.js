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

// cash out feture ****************

document.getElementById("cashOutMoneyBtn").addEventListener("click",function(e){
    e.preventDefault()
    const aggentNumber =document.getElementById("aggentNumbers").value;
    const ammount = parseInt(document.getElementById("amounts").value);
    const pinNumberss = parseInt(document.getElementById("pins").value);
     const amountValue = parseInt(document.getElementById("amount").innerText);

      if(aggentNumber.length<11){
    alert("account number do not mach");
    return;
   }
   if(pinNumberss !== pinNumbers){
    alert("enter your right pin number")
    return;
   }

     const allAmount = amountValue - ammount;
     document.getElementById("amount").innerText = allAmount;
     
    
})

// togling ///////////////////

document.getElementById("add money").addEventListener("click",function(e){
    e.preventDefault()
    document.getElementById("add-money-pearent").style.display="block";
    document.getElementById("cash-out-parent").style.display="none";
})
document.getElementById("cash-out").addEventListener("click",function(e){
    e.preventDefault()
    document.getElementById("cash-out-parent").style.display="block";
    document.getElementById("add-money-pearent").style.display="none";
    
})
