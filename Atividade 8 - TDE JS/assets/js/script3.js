setInputFilter(document.getElementById("spliter"), function(value) {
    return /^(-?\d*[.,]?\d*)+$/.test(value); });

let spliter_input = document.getElementById("spliter")

function spliter () {
    if (this.value.length > 0) {
        array = this.value.split(',').map(Number)
        document.getElementById("result").innerText = Math.max(...array)
    }
}

spliter_input.addEventListener("input", spliter)