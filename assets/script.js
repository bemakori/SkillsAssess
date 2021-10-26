let yourName = "Brian E. Makori" 

let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let sum = 0     // Total

document.getElementById('credit').textContent = `Created by ${yourName}`

document.getElementById('add-gb').addEventListener('click', function() {

    document.getElementById("qty-gb").innerHTML = gb + 1
    gb++
    total()
})

document.getElementById('add-cc').addEventListener('click', function() {

    document.getElementById("qty-cc").innerHTML = cc + 1
    cc++
    total()
    
})

document.getElementById('add-sugar').addEventListener('click', function() {

    document.getElementById("qty-sugar").innerHTML = sugar + 1
    sugar++
    total() 
})

document.getElementById('minus-gb').addEventListener('click', function() {
    if (gb > 0){
        document.getElementById("qty-gb").innerHTML = gb - 1
        gb--
        remainder()
    } else {
        document.getElementById("qty-gb").innerHTML = 0

    }
  
})

document.getElementById('minus-cc').addEventListener('click', function() {
    if (cc > 0) {
        document.getElementById("qty-cc").innerHTML = cc - 1
        cc--
        remainder()
    } else {
        document.getElementById("qty-cc").innerHTML = 0
    }
})

document.getElementById('minus-sugar').addEventListener('click', function() {
    if (sugar > 0){
        document.getElementById("qty-sugar").innerHTML = sugar - 1
        sugar--
        remainder()
    } else {
        document.getElementById("qty-sugar").innerHTML = 0
    }
})

function total () {
    document.getElementById("qty-total").innerHTML = sum + 1
    sum++
}

function remainder () {
    
    if (sum >= 0) {
        document.getElementById("qty-total").innerHTML = sum - 1
        sum--

    } else {
        document.getElementById("qty-total").innerHTML = 0
    }
}

    
