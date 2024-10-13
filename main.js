// Variable assignments
const generateBtn = document.querySelector('#generateBtn')
const jokeContent = document.querySelector('.joke-content')
// Joke API url
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit"

// Fetch joke url
const fetchJoke = () => {
    // Remove joke fade value
    jokeContent.classList.remove('fadeIn')
    try {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            jokeContent.textContent = `${data.setup} ${data.delivery}`
            jokeContent.classList.add('fadeIn')
        })
    } catch (error) {
        console.error("Could not fetch data", error)
    }
}

generateBtn.addEventListener('click', fetchJoke)