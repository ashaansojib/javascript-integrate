// how to work add event listener.
/*

*/

// with function
function changeColor(){
    const postTwo = document.getElementById("post-two");
    postTwo.style.backgroundColor = "black";
}

// direct handelar
document.getElementById("read").addEventListener('click', function(){
    const postOne = document.getElementById("first");
    postOne.style.backgroundColor = 'green';
})

document.getElementById("up-btn").addEventListener('click', function(){
    const fieldInput = document.getElementById("field-input");
    const p = document.getElementById("update");
    p.innerText = fieldInput.value;
    fieldInput.value = '';
})