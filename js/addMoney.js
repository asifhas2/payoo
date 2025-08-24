const pin = 1234;
const pinNumbers = parseInt(pin)

// function to get input valu
function getInputValuNumber (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)
    return inputFieldValueNumber
}
function getInputValue (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}

// function to get innertext
function getInnerText(id){
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)

    return elementValueNumber
}

// function to set innerText
function setInnerText(value){
    const availableBalanceElement = document.getElementById("amount")
    availableBalanceElement.innerText = value
}

// add money btn
document.getElementById("addMoneyBtn").addEventListener("click",function(e){
    e.preventDefault()
   const bankValu = getInputValuNumber("bank")
   const accountNumber = getInputValue("account number")
   const addAmount = getInputValuNumber("add amount")
   const pinNumber = getInputValuNumber("pin number")
   const amountValue = getInnerText("amount")

   if(accountNumber.length<11){
    alert("account number do not mach");
    return;
   }
   if(pinNumber !== pinNumbers){
    alert("enter your right pin number")
    return;
   }

   const allAmount = addAmount + amountValue;
   setInnerText(allAmount)
})

// cash out feture ****************

document.getElementById("cashOutMoneyBtn").addEventListener("click",function(e){
    e.preventDefault()
    const aggentNumber =getInputValue("aggentNumbers")
    const ammount = getInputValuNumber("amounts")
    const pinNumberss = getInputValuNumber("pins")
     const amountValue = getInnerText("amount")

      if(aggentNumber.length<11){
    alert("account number do not mach");
    return;
   }
   if(pinNumberss !== pinNumbers){
    alert("enter your right pin number")
    return;
   }

     const allAmount = amountValue - ammount;
     setInnerText(allAmount);
     
    
})

// togling function

function handelTogling(id){
    const forms = document.getElementsByClassName("form")
    for(const form of forms){
        form.style.display = "none"
    }
    document.getElementById(id).style.display="block"
}
// togling function btn
function handelToglingBtn(id){
    const formBtn = document.getElementsByClassName("form-btn")
   
    for(const btn of formBtn){
        btn.classList.remove("border-[#0808081a]","bg-[#0874f20d]")
         btn.classList.add("border-gray-300")
    }
    document.getElementById(id).classList.remove("border-gray-300")
    document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")
}

// togling

document.getElementById("add money").addEventListener("click",function(e){
    handelTogling("add-money-pearent")
    handelToglingBtn("add money")
})
document.getElementById("cash-out").addEventListener("click",function(e){
    handelTogling("cash-out-parent")
    handelToglingBtn("cash-out")
})
document.getElementById("transfer-money-btn").addEventListener("click",function(e){
    handelTogling("transfer money")
    handelToglingBtn("transfer-money-btn")
})
document.getElementById("get-bunos-btn").addEventListener("click",function(e){
    handelTogling("get bouns")
    handelToglingBtn("get-bunos-btn")
})
document.getElementById("pay-bil-btn").addEventListener("click",function(e){
    handelTogling("pay-bil")
    handelToglingBtn("pay-bil-btn")
})