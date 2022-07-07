// const init = () => {
// }
// document.addEventListener('DOMContentLoaded', init);

/*
Your primary task will be to get this form working. When a user inputs a valid ID, the movie information should appear on the page.

Doing this will involve a few steps:

- Add event listeners to capture form data and override a form's default behavior
- Fetch data based on what the user types into that form
- Display that data on the page
*/

// target the DOM element we want
const inputForm = document.querySelector('form')

// add event listener to the form
inputForm.addEventListener('submit', (event) => {
    // prevent default submit behavior
    event.preventDefault()

    // confirm everything is working by adding console log in callback function
    console.log(event)

    /*
    get the value of the input entered in the form
    2 ways:
        1. The event object actually contains the value we need
        2. We can select the specific DOM element and get its value
    */

    // 1. access the value from our event object
    const input = event.target['searchByID'].value

    // or 2. access input value directly
    // const input = document.querySelector('input#searchByID').value

    // fetch data based on user input (modify the URL) using interpolation
    fetch(`http://localhost:3000/movies/${input}`)
    .then(response => response.json())
    .then(data => {
        // first, access the title/summary elements using the 
        const title = document.querySelector('section#movieDetails h4')
        const summary = document.querySelector('section#movieDetails p')

        // next, change the innerText values of title/summary
        title.innerText = data.title
        summary.innerText = data.summary
    })

    // display retrieved data (user input and fetch request data)
    // replace the Title and Summary (in #movieDetails section) with data
    // code in the second .then of the fetch request above
})