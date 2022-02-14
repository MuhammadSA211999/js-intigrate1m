// document.getElementById('deposit-btn').addEventListener('click', function () {
//     const depositInput = document.getElementById('deposit-input')
//     const newDepositAmountText = depositInput.value
//     const newDepositAmount = parseFloat(newDepositAmountText)
//     const depositTotal = document.getElementById('deposit-total')
//     const previousDepositText = depositTotal.innerText;
//     const previousDepositAmount = parseFloat(previousDepositText)
//     newDepositTotal = previousDepositAmount + newDepositAmount
//     depositTotal.innerText = newDepositTotal
//     // acount balance
//     const balanceTotal = document.getElementById('balance-total');
//     const balanceTotalText = balanceTotal.innerText
//     const previousBalanceTotal = parseFloat(balanceTotalText)
//     const newBalanceTotal = previousBalanceTotal + newDepositAmount
//     balanceTotal.innerText = newBalanceTotal
//     // clear value
//     depositInput.value = '';
// })
// // widthdraw event handler
// document.getElementById('widthdraw-btn').addEventListener('click', function () {
//     const widthdrawInput = document.getElementById('widthdraw-input')
//     const widthdrawAmountText = widthdrawInput.value;
//     const newWidthdrawAmount = parseFloat(widthdrawAmountText)
//     // set widthdraw total to diplay
//     const widthdrawTotal = document.getElementById('widthdraw-total')
//     const prevousWidthdrawText = widthdrawTotal.innerText
//     const prevousWidthdrawTotal = parseFloat(prevousWidthdrawText)
//     const newWidthdrawTotal = prevousWidthdrawTotal + newWidthdrawAmount
//     widthdrawTotal.innerText = newWidthdrawTotal
//     // update balance account balance decreasing with widthdraw
//     const balanceTotal = document.getElementById('balance-total')
//     const previousBlanceText = balanceTotal.innerText
//     const previousBalanceTotal = parseFloat(previousBlanceText)
//     const newBalanceTotal = previousBalanceTotal - newWidthdrawAmount
//     balanceTotal.innerText = newBalanceTotal


//     // clear widthdraw input to set new
//     widthdrawInput.value = "";

// })

document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input')
    const depositAmountText = depositInput.value
    const newDepositAmount = parseFloat(depositAmountText)
    const totalDeposit = document.getElementById('deposit-total')
    const previousDepositText = totalDeposit.innerText
    const previousDepositAmount = parseFloat(previousDepositText)
    const newDepositTotal = previousDepositAmount + newDepositAmount
    totalDeposit.innerText = newDepositTotal
    // balance setting
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(balanceTotalText)
    const newBalanceTotal = previousBalanceTotal + newDepositAmount
    balanceTotal.innerText = newBalanceTotal
    depositInput.value = '';
})
document.getElementById('widthdraw-btn').addEventListener('click', function () {
    const widthdrawInput = document.getElementById('widthdraw-input')
    const widthdrawAmountText = widthdrawInput.value
    const newWidthdrawAmount = parseFloat(widthdrawAmountText)
    const widthdrawTotal = document.getElementById('widthdraw-total')
    const prevousWidthdrawText = widthdrawTotal.innerText
    const prevousWidthdrawAmount = parseFloat(prevousWidthdrawText)
    const newTotalWidthdraw = prevousWidthdrawAmount + newWidthdrawAmount
    widthdrawTotal.innerText = newTotalWidthdraw
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(previousBalanceTotalText)
    const currentTotalBalance = previousBalanceTotal - newWidthdrawAmount
    balanceTotal.innerText = currentTotalBalance
    widthdrawInput.value = '';
})