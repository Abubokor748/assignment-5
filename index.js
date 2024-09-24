
const donationInput = document.getElementById("donation-input");

document.getElementById("donation-button").addEventListener("click", () => {
    const addMoneyInput = document.getElementById("input-add-money").value;
    const accountBalance = document.getElementById('account-balance').innerText;

    const newAddMoneyInput = parseFloat(addMoneyInput);
    const newAccountBalance = parseFloat(accountBalance);
    
  if(!isNaN(addMoneyInput) && newAccountBalance >= newAddMoneyInput && newAddMoneyInput > 0){
    const donatedBalance = document.getElementById("doneted-balance").innerText;

    const balanceNumber = parseFloat(donatedBalance);
    const newBalance = newAddMoneyInput + balanceNumber;

    document.getElementById('doneted-balance').innerText = newBalance + ' BDT' ;

    const afterAccountBalance = newAccountBalance - newAddMoneyInput;

    document.getElementById('account-balance').innerText = afterAccountBalance ;
  }
  else{
    alert('Invalid Number');
  } 
  });
