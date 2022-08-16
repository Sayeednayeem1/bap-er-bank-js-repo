document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString  = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // step-3: get the current deposit total
    // learn where to use ".innerText" and .value",,
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // step-4: add numbers to set the total deposit
    const curreentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = curreentDepositTotal;

    // step-5:get balance current total

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balance
    
    const curreentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = curreentBalanceTotal;

    // step-7: clear the deposit field
    depositField.value = "";
})