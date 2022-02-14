// function doubleIt(num){
//     result=num*2
//     return result
// }
// const first=doubleIt(5)
// const first=doubleIt(7)
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value
    const amountValue = parseFloat(inputAmountText)
    // clear inputField
    inputField.value = '';
    return amountValue;
    // depositInput.value = '';
}
function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId)
    const totalText = totalElement.innerText
    const previousTotal = parseFloat(totalText)

    totalElement.innerText = amount + previousTotal
}
// for widthdraw minus amount
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(balanceTotalText)
    return previousBalanceTotal;
}

function updateBlance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total')
    // const balanceTotalText = balanceTotal.innerText
    // const previousBalanceTotal = parseFloat(balanceTotalText)
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount
    }

}


document.getElementById('deposit-btn').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value
    // const depositAmount = parseFloat(depositAmountText)
    const depositAmount = getInputValue('deposit-input')
    // get current deposit
    // const depositTotal = document.getElementById('deposit-total')
    // const depositTotalText = depositTotal.innerText
    // const previousDepositTotal = parseFloat(depositTotalText)

    // depositTotal.innerText = depositAmount + previousDepositTotal
    // console.log(depositTotalText)
    updateTotalField('deposit-total', depositAmount)

    // set/update balanceTotal*****
    // const balanceTotal = document.getElementById('balance-total')
    // const balanceTotalText = balanceTotal.innerText
    // const previousBalanceTotal = parseFloat(balanceTotalText)
    // balanceTotal.innerText = previousBalanceTotal + depositAmount
    updateBlance(depositAmount, true);

})
// widthdraw section
document.getElementById('widthdraw-btn').addEventListener('click', function () {
    // const widthdrawInput = document.getElementById('widthdraw-input')
    // const widthdrawAmountText = widthdrawInput.value
    // const widthdrawAmount = parseFloat(widthdrawAmountText)
    const widthdrawAmount = getInputValue('widthdraw-input')
    // update widthdraw total/*** */
    // const widthdrawTotal = document.getElementById('widthdraw-total')
    // const previousWidthdrawTotalText = widthdrawTotal.innerText
    // const previousWidthdrawTotal = parseFloat(previousWidthdrawTotalText)
    // widthdrawTotal.innerText = previousWidthdrawTotal + widthdrawAmount
    updateTotalField('widthdraw-total', widthdrawAmount)
    // ****se total balance after widthdraw****
    // const balanceTotal = document.getElementById('balance-total')
    // const balanceTotalText = balanceTotal.innerText
    // const previousBalanceTotal = parseFloat(balanceTotalText)
    // balanceTotal.innerText = previousBalanceTotal - widthdrawAmount
    // // clear widthdraw inputField
    // // widthdrawInput.value = '';
    updateBlance(widthdrawAmount, false);
})

