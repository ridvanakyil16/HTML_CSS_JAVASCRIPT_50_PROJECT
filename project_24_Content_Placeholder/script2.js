const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyCnIGaOsrrXPRf9eHpdSxgiIrZtS5sWzpA'

const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const names = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text')

getBooks(API_URL)

async function getBooks(url) {

    fetch(url).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data.items)
            showBooks(data.items)
        })
        // fetch("https://api.nytimes.com/svc/archive/v1/2022/3.json?api-key=RGXDGOu8A4MTG4nKD4DW59kUQUHfpWqL").then((response) => {
        //     return response.json()
        // }).then((data) => {
        //     console.log("lan")
        //     console.log(data)
        // }).catch((err) => {
        //     console.log(err)
        // })

}

function showBooks(books) {

    books.forEach((book) => {

        const { title, language, imageLinks, description, authors, publishedDate } = book.volumeInfo

        const splitDescription = description.split(",").join(" ")

        const description2 = splitDescription.split(" ")

        const description50 = description2.slice(0, 30).join(" ")

        const bookEl = document.createElement('div')
        bookEl.classList.add('card')

        bookEl.innerHTML = `
            <div class="card-header animated-bg" id="header">
                <img src="${imageLinks.smallThumbnail}" alt="${title}">
            </div>

            <div class="card-content">
                <h3 class="card-title animated-bg animated-bg-text" id="title">
                    ${title}
                </h3>
                <p class="card-excerpt" id="excerpt">
                    ${description50}
                    <span class="animated-bg animated-bg-text">&nbsp;</span>
                    <span class="animated-bg animated-bg-text">&nbsp;</span>
                    <span class="animated-bg animated-bg-text">&nbsp;</span>
                </p>
                <div class="author">
                    <div class="profile-img animated-bg" id="profile_img">&nbsp;</div>
                    <div class="author-info">
                        <strong class="animated-bg animated-bg-text" id="name">${authors}</strong>
                        <small class="animated-bg animated-bg-text" id="date">${publishedDate}</small>
                    </div>
                </div>
            </div>
        `

        main.appendChild(bookEl)
    });
}