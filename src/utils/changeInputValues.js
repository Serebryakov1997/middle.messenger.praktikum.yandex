export function getInputValue(inputId) {
    // const element = document.getElementById(inputId);
    const element = document.querySelector(inputId);
    if (element !== null) {
        return document.getElementById(inputId).value;
    } else {
        return null;
    }
}

export function setInputValue(inputId, newInputValue) {
    const elem = document.getElementById(inputId);
    if (elem !== null) {
        // console.log('elem: ', elem);
        document.getElementById(inputId).value = newInputValue;
    } else {
        return null;
    }

}