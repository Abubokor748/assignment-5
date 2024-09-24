const donationInput = document.getElementById("donation-input");
const donationButton = document
  .getElementById("donation-button")
  .addEventListener("click", function () {
    const addMoneyInput = document.getElementById("input-add-money").value;
    console.log(addMoneyInput);
    const accountBalance = document.getElementById('account-balance').innerText;
    console.log(accountBalance);
    
  if(addMoneyInput <= 0 || isNaN(addMoneyInput) || accountBalance > addMoneyInput){
    const donatedBalance = document.getElementById("doneted-balance").innerText;
    console.log(donatedBalance);
    const addMoneyNumber = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat(donatedBalance);
    const newBalance = addMoneyNumber + balanceNumber;
    console.log(newBalance);
    document.getElementById('doneted-balance').innerText = newBalance + ' BDT' ;
    const afterAccountBalance = accountBalance - addMoneyInput
    document.getElementById('addMoneyInput').innerText = afterAccountBalance + ' BDT';
  }
  else{
    alert('Invalid Number')
  }
    
  });
