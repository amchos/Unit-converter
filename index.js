const convertBtn = document.getElementById('convert-btn')
const inputField = document.getElementById('input')
const volume = document.getElementById('volume')
const length = document.getElementById('length')
const mass = document.getElementById('mass')

inputField.addEventListener('keyup', () => {
    let digit = inputField.value
    if(!digit)
        digit = 20

    volume.innerHTML = gallonLiter(digit)
    length.innerHTML = metrFeet(digit)
    mass.innerHTML = killoPound(digit)
})

function metrFeet(number) {
    let feets = (number / 3.281).toFixed(3)
    let meters = (number * 3.281).toFixed(3)
    let result = `${number} meters = ${feets} feet | ${number} feet = ${meters} meters`
    return result
}

function gallonLiter(number) {
    let galons = (number / 3.785).toFixed(3)
    let liters = (number * 3.78541).toFixed(3)
    let result = `${number} liters = ${galons} gallons | ${number} gallons = ${liters} liters`
    return result
}

function killoPound(number) {
    let kilo = (number / 2.205).toFixed(3)
    let pound = (number * 2.205).toFixed(3)
    let result = `${number} kilos = ${pound} pounds | ${number} pounds = ${kilo} kilos`
    return result
}
