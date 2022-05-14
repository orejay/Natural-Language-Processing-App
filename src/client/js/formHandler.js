import { checkForName } from './nameChecker'

const subBtn = document.getElementById('sub-btn')

const events = subBtn.addEventListener('click', function (event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log("::: Form Submitted :::")
    postUrl('http://localhost:8081/source', {url: formText})
    .then(populate(resultData))
})

const postUrl = async(url="", data={}) => {
    console.log('hi')
    try{
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resultData = await response.json()
        return resultData
    }catch(error){
        console.log('could not reach url', error)
    }
}

const populate = async (resultData) => {
    console.log(resultData)
}

export { events }
