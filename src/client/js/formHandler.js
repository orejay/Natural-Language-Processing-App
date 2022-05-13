import { checkForName } from './nameChecker'

const subBtn = document.getElementById('sub-btn')

const events = subBtn.addEventListener('click', function (event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
})



console.log('hi')

export { events }
