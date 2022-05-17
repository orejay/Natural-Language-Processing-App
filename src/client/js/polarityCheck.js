function checkPolarity(score) {
    if (score == "P+"){
        return `STRONG POSITIVE`
    }
    else if (score == "P"){
        return `POSITIVE`
    }
    else if (score == "NEW"){
        return `NEUTRAL`
    }
    else if (score == "N+"){
        return `STRONG NEGATIVE`
    }
    else if (score == "N"){
        return `NEGATIVE`
    }
    else if (score == "NONE"){
        return `NO SENTIMENT`
    }
}

export { checkPolarity }
