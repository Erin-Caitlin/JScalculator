let dataEntry = document.querySelector('[data-entry]')

function display(value) {
    dataEntry.value += value
}

function evaluateSum() {
    let sum = dataEntry.value
    dataEntry.value = eval(sum)
}

function clearSum() {
    dataEntry.value = "" 
}




