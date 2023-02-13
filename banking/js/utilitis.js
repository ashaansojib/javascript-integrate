// input field function
function getInputFieldById(inputfieldId){
    const inputFieldElement = document.getElementById(inputfieldId);
    const inputFieldElementValue = inputFieldElement.value;
    inputFieldElement.value = '';
    return inputFieldElementValue;
}
function errorStyle(errorDesign){
    document.getElementById(errorDesign).style.backgroundColor = 'red';
}