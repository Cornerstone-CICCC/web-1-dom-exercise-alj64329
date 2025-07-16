// YOUR CODE HERE
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const outputs4 = document.querySelectorAll("#output4 p")
const input = document.getElementById("message")


btn1.addEventListener("click", ()=>{
    const output1 = document.getElementById("output1")
    output1.style.color = "red"
})

btn2.addEventListener("click", ()=>{
    const output2 = document.getElementById("output2")
    const text = "Hello world"

    output2.append(text)
})

btn3.addEventListener("click", ()=>{
    const smallText = document.querySelector(".small-text")
    smallText.remove()
})

btn4.addEventListener("click", ()=>{
    outputs4.forEach((p) =>{
        p.style.color = "red"
    })
})

btn5.addEventListener("click", ()=>{
    console.log(input.value)
})
