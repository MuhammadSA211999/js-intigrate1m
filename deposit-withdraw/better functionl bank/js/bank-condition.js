// function getInputValue(inputId) {
//     const inputField = document.getElementById(inputId);
//     const inputAmountText = inputField.value
//     const amountValue = parseFloat(inputAmountText)
//     // clear inputField
//     inputField.value = '';
//     return amountValue;
//     // depositInput.value = '';
// }
// function updateTotalField(totalFieldId, amount) {
//     // debugger;
//     const totalElement = document.getElementById(totalFieldId)
//     const totalText = totalElement.innerText
//     const previousTotal = parseFloat(totalText)

//     totalElement.innerText = amount + previousTotal
// }
// function getCurrentBalance() {
//     const balanceTotal = document.getElementById('balance-total')
//     const balanceTotalText = balanceTotal.innerText
//     const previousBalanceTotal = parseFloat(balanceTotalText)
//     return previousBalanceTotal
// }
// function updateBlance(amount, isAdd) {
//     const balanceTotal = document.getElementById('balance-total')
//     const balanceTotalText = balanceTotal.innerText
//     const previousBalanceTotal = parseFloat(balanceTotalText)
//     if (isAdd == true) {
//         balanceTotal.innerText = previousBalanceTotal + amount
//     }
//     else {
//         balanceTotal.innerText = previousBalanceTotal - amount
//     }

// }

// // **************************************
// document.getElementById('deposit-btn').addEventListener('click', function () {
//     const depositAmount = getInputValue('deposit-input');
//     if (depositAmount > 0) {
//         updateTotalField('deposit-total', depositAmount);
//         updateBlance(depositAmount, true);
//     }

// })
// document.getElementById('widthdraw-btn').addEventListener('click', function () {
//     const widthdrawAmount = getInputValue('widthdraw-input')
//     const currentBalance = getCurrentBalance()
//     if (widthdrawAmount > 0 && widthdrawAmount < currentBalance) {
//         updateTotalField('widthdraw-total', widthdrawAmount)
//         updateBlance(widthdrawAmount, false);
//     }

// })


