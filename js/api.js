var quotie = document.querySelector("#quote")
var quotie2 = document.querySelector("#quote2")
fetch('https://official-joke-api.appspot.com/jokes/random').then(response => {
    response.json().then(data => {
        console.log(data)
        quotie.textContent = data.setup
        quotie2.textContent = data.punchline
        })
    })