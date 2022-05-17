import { checkForUrl } from "./Urlcheck"
const subBtn = document.getElementById('sub-btn')
const agreement = document.getElementById('agreement')
const confidence = document.getElementById('confidence')
const irony = document.getElementById('irony')
const badUrl = document.getElementById('bad-url')



const events = subBtn.addEventListener('click', function (event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log("::: Form Submitted :::")
    postUrl('http://localhost:8080/source', {url: formText})
    .then((resultData) =>{
                    updateUi(resultData)
                });
})

const postUrl = async(url="", data={}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try{
        const resultData = await response.json();
        console.log('Data received:', resultData)
        return resultData;
    }catch(error){
        console.log('could not reach url', error)
    }
}

const updateUi = async (resultData) => {
    console.log(resultData)
    if (resultData.status.code == 0) {
        agreement.innerText = resultData.agreement
        confidence.innerText = resultData.confidence
        irony.innerText = resultData.irony
    } else {
        checkForUrl()
        badUrl.innerText = 'Please check your link and try again'
    }
}

export { events,
        checkForUrl
}
