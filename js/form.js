document.getElementById("form btn").addEventListener("click",function(e){
    e.preventDefault()
   const mobailNumber = 01810401376
   const pinNumber = 1234

   const mobailNumberValu =parseInt(document.getElementById("mobail-number").value);
   const PinNumberValu =parseInt(document.getElementById("pin-number").value);

   if(mobailNumberValu === mobailNumber && PinNumberValu === pinNumber ){
    window.location.href = "./index1.html"
   }
   else{
    alert("pin does not mach")
   }
})