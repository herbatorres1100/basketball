let count = 0
let numberEl = document.getElementById("home-points")
let numberEl2 = document.getElementById("guest-points")
let numberEl3 = document.getElementById("home-points")
let numberEl4 = document.getElementById("guest-points")

function addh1() {
    numberEl.textContent = count += 1
    
}

function addh2() {
    numberEl.textContent = count += 2
}

function addh3() {
    numberEl.textContent = count += 3
}

function addg1() {
  numberEl2.textContent = count += 1
}

function addg2() {
   numberEl2.textContent = count += 2 
}

function addg3() {
   numberEl2.textContent = count += 3 
}

function reset() {
    numberEl3.textContent = 0
    numberEl4.textContent = 0
}
