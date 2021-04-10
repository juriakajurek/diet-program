$(function () {
    setCost()
    document.getElementById('patients').addEventListener('input', setCost)
})

function increasePatients() {
    ++document.getElementById('patients').value
    setCost()
}
function decreasePatients() {
    --document.getElementById('patients').value
    setCost()
}

function setCost() {
    document.getElementById('cost').innerHTML =
        document.getElementById('patients').value * 2 +
        ',00 zł <span>z VAT</span>'
}
