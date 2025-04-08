let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
count = 0
function increment() {
    count += 1
    countEl.textContent = count
}