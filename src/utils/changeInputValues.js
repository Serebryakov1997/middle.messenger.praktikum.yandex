export function getInputValue(inputId) {
    const element = document.getElementById(inputId);
    if (element !== null) {
        return document.getElementById(inputId).value;
    } else {
        return null;
    }
}

export function setInputValue(inputId, newInputValue) {
    document.getElementById(inputId).value = newInputValue;
}