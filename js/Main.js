console.log("Hello World")
window.addEventListener("load", function () {
    let count = 0
    const plusButton = document.getElementById("plus-button")
    const minusButton = document.getElementById("minus-button")
    const countPreview = document.getElementById("count-preview")
    console.log(plusButton)

    function onPlus() {
        count++
        countPreview.innerHTML = count
        console.dir(countPreview.innerHTML)
    }

    function onMinus() {
        if (count === 0) {
            return
        }
        count--
        countPreview.innerHTML = count
        console.log(countPreview.innerHTML)
    }

    plusButton.addEventListener("click", onPlus)

    minusButton.addEventListener("click", onMinus)
    
})

