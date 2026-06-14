let counter = 0

function increment() {
    counter++
    console.log(counter)
    document.getElementById("counter").innerHTML = counter
}


function decrement() {
    counter--
    console.log(counter)
    document.getElementById("counter").innerHTML = counter
}


