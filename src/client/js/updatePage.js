import { checkPolarity } from "./polarityCheck"

const updateUi = async (resultData) => {
    if (resultData.status.code == 0) {
        result.innerHTML = '<h2 id="result-hd">RESULT</h2>'
        agreement.innerText = `AGREEMENT:    ${resultData.agreement}`
        confidence.innerText = `CONFIDENCE:    ${resultData.confidence}`
        subjectivity.innerText = `SUBJECTIVITY:    ${resultData.subjectivity}`
        polarity.innerText = `POLARITY: ${checkPolarity(resultData.score_tag)}`
        irony.innerText = `IRONY:    ${resultData.irony}`
    }
}

export {
    updateUi
}