import { checkPolarity } from "./polarityCheck"
const subBtn = document.getElementById('sub-btn')
const agreement = document.getElementById('agreement')
const confidence = document.getElementById('confidence')
const irony = document.getElementById('irony')
const result =document.getElementById('result')
const subjectivity = document.getElementById('subjectivity')
const polarity = document.getElementById('polarity')

const events = subBtn.addEventListener('click', function (event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('url').value
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
        result.innerHTML = '<h2 id="result-hd">RESULT</h2>'
        agreement.innerText = `AGREEMENT:    ${resultData.agreement}`
        confidence.innerText = `CONFIDENCE:    ${resultData.confidence}`
        subjectivity.innerText = `SUBJECTIVITY:    ${resultData.subjectivity}`
        polarity.innerText = `POLARITY: ${checkPolarity(resultData.score_tag)}`
        irony.innerText = `IRONY:    ${resultData.irony}`
    } else {
        checkForUrl()
    }
}

function checkForUrl() {
    alert('Please check your URL and try again')
}

export { events,
        checkPolarity
}
