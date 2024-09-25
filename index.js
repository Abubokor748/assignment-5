//  nowakhali button

document.getElementById("donation-button").addEventListener("click", () => {
  const addMoneyInput = document.getElementById("input-add-money").value;
  const accountBalance = document.getElementById("account-balance").innerText;

  const newAddMoneyInput = parseFloat(addMoneyInput);
  const newAccountBalance = parseFloat(accountBalance);

  if (
    !isNaN(addMoneyInput) &&
    newAccountBalance >= newAddMoneyInput &&
    newAddMoneyInput > 0
  ) {
    const donatedBalance = document.getElementById("doneted-balance").innerText;

    const balanceNumber = parseFloat(donatedBalance);
    const newBalance = newAddMoneyInput + balanceNumber;

    document.getElementById("doneted-balance").innerText = newBalance + " BDT";

    const afterAccountBalance = newAccountBalance - newAddMoneyInput;

    document.getElementById("account-balance").innerText = afterAccountBalance;

    const div = document.createElement("div");
    div.innerHTML = `
    <h3>${addMoneyInput} Taka is Donated for flood at Nowakhali. </h3>
    <p>
    
    const dateTimeAndTimeZone = getCurrentDateTimeAndTimeZone();
     </p>`;
    
    document.getElementById('history-container').appendChild('div');

    alert("Congratulations, You have donated for mankind");
  } 
  else {
    alert("Invalid Number");
  }
});

// feni button

document.getElementById("donation-button-2").addEventListener("click", () => {
  const addMoneyInput2 = document.getElementById("input-add-money-2").value;
  const accountBalance = document.getElementById("account-balance").innerText;

  const newAddMoneyInput = parseFloat(addMoneyInput2);
  const newAccountBalance = parseFloat(accountBalance);

  if (
    !isNaN(addMoneyInput2) &&
    newAccountBalance >= newAddMoneyInput &&
    newAddMoneyInput > 0
  ) {
    const donatedBalance2 =
      document.getElementById("doneted-balance-2").innerText;

    const balanceNumber = parseFloat(donatedBalance2);
    const newBalance = newAddMoneyInput + balanceNumber;

    document.getElementById("doneted-balance-2").innerText =
      newBalance + " BDT";

    const afterAccountBalance = newAccountBalance - newAddMoneyInput;

    document.getElementById("account-balance").innerText = afterAccountBalance;

    const div = document.createElement("div");
    div.innerHTML = `
    <h3>${addMoneyInput2} Taka is Donated for flood at Feni. </h3>
    <p>
    
    const dateTimeAndTimeZone = getCurrentDateTimeAndTimeZone();
     </p>`;
    
    document.getElementById('history-container').appendChild('div');

    alert("Congratulations, You have donated for mankind");
  } else {
    alert("Invalid Number");
  }
});

// quota

document.getElementById("donation-button-3").addEventListener("click", () => {
  const addMoneyInput3 = document.getElementById("input-add-money-3").value;
  const accountBalance = document.getElementById("account-balance").innerText;

  const newAddMoneyInput = parseFloat(addMoneyInput3);
  const newAccountBalance = parseFloat(accountBalance);

  if (
    !isNaN(addMoneyInput3) &&
    newAccountBalance >= newAddMoneyInput &&
    newAddMoneyInput > 0
  ) {
    const donatedBalance3 =
      document.getElementById("doneted-balance-3").innerText;

    const balanceNumber = parseFloat(donatedBalance3);
    const newBalance = newAddMoneyInput + balanceNumber;

    document.getElementById("doneted-balance-3").innerText =
      newBalance + " BDT";

    const afterAccountBalance = newAccountBalance - newAddMoneyInput;

    document.getElementById("account-balance").innerText = afterAccountBalance;

    const div = document.createElement("div");
    div.innerHTML = `
    <h3>${addMoneyInput3} Taka is Donated for Quota Movement. </h3>
    <p>
    
    const dateTimeAndTimeZone = getCurrentDateTimeAndTimeZone();
     </p>`;
    
    document.getElementById('history-container').appendChild('div');

    alert("Congratulations, You have donated for mankind");
  } else {
    alert("Invalid Number");
  }
});
