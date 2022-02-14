function getInputValue(inputId) {
    const capInput = document.getElementById(inputId)
    const capInputText = capInput.value
    const inputAmount = parseFloat(capInputText)
    capInput.value = ''
    return inputAmount
}
function transferField(totalId, excngAmount) {
    const totalFieldId = document.getElementById(totalId)
    const totalFieldText = totalFieldId.innerText
    const preTotalAmount = parseFloat(totalFieldText)
    const newTotalAmount = preTotalAmount + excngAmount
    totalFieldId.innerText = newTotalAmount
}
function preExcngMainBalance() {
    const mainBalance = document.getElementById('balance-total')
    const mainBalanceText = mainBalance.innerText
    const preMainBalance = parseFloat(mainBalanceText)
    return preMainBalance;
}

function updateMainBalance(isAdd, amount) {
    const totalBalance = document.getElementById('balance-total')
    const totalBalanceText = totalBalance.innerText
    const preBalanceTotal = parseFloat(totalBalanceText)
    if (isAdd == true) {
        totalBalance.innerText = preBalanceTotal + amount
    }
    else {
        totalBalance.innerText = preBalanceTotal - amount
    }
}


document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input')
    if (depositAmount > 0) {
        transferField('deposit-total', depositAmount)
        updateMainBalance(true, depositAmount)
    }

})
document.getElementById('widthdraw-btn').addEventListener('click', function () {
    const currentBalance = preExcngMainBalance()
    const widthdrawAmount = getInputValue('widthdraw-input')

    if (widthdrawAmount > 0 && widthdrawAmount < currentBalance) {
        transferField('widthdraw-total', widthdrawAmount)
        updateMainBalance(false, widthdrawAmount)
    }


})