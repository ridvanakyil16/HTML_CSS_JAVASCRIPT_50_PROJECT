const container = document.querySelector('.container')
const unplashURL = 'https://source.unplash.com/random/'
const rows = 10

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img');
    img.src = `${unplashURL}${getRandomSize()}`
    container.appendChild(img)
}

function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300
}