function donate(event){
    event.preventDefault();
    window.open('https://www.saylaniwelfare.com/en/donate', '_blank');
}


function calculate(event){

    event.preventDefault();
    var cash = document.getElementById("cash").value;
    var gold = document.getElementById("gold").value;
    var silver = document.getElementById("silver").value;

    if(cash == " " && gold == " " && silver == " " ){
        alert("Please enter atlest one value");
        return;
    }
    
    var totalAmount = parseInt(cash|| 0) + parseInt(gold || 0) + parseInt(silver ||0);
    
    var totalAmountDisplay = "Rs: " + totalAmount.toLocaleString();
    var zakatAmountDisplay = "Rs: " + (totalAmount * 0.25 ).toLocaleString();
    
    document.querySelector("#your-amount").textContent = totalAmountDisplay;
    document.querySelector("#zakat-amount").textContent = zakatAmountDisplay;

  }

  

    
    
    
    
    
    
    