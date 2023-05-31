let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
function increment() {
    count += 1 //or count = count + 1
    countEl.innerText = count
}
function save() {
    let prevCount = count + " - "
    saveEl.textContent += prevCount
    count = 0
    countEl.innerText = 0
}