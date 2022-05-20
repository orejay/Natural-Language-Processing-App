import { checkPolarity } from "./polarityCheck"
import { checkUrl } from "./urlCheck"
import { updateUi } from "./updatePage"
const subBtn = document.getElementById('sub-btn')
const agreement = document.getElementById('agreement')
const confidence = document.getElementById('confidence')
const irony = document.getElementById('irony')
const result =document.getElementById('result')
const subjectivity = document.getElementById('subjectivity')
const polarity = document.getElementById('polarity')
const errorMsg = document.getElementById('error')

const events = subBtn.addEventListener('click', function (event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('url').value
    console.log("::: Form Submitted :::")
    if ( checkUrl(formText) ) {
        postUrl('http://localhost:8080/source', {url: formText})
        .then((resultData) =>{
                        updateUi(resultData)
                    });
    } else {
        errorMsg.innerText = 'Invalid URL. Please check the link and try again...'
    }
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

export { events,
        checkPolarity,
        postUrl,
        updateUi
}
