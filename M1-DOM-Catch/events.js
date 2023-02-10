// how to work add event listener.
/*
1. event listener onek upay a kaj kora jete pare. tar moddhe mejor 7 ta option ami jani ba ami 7 vabe ekta kaj korte pari. er moddhe amra duita option bar bar use korbo ba duita option diye beshi kaj korbo. ekta function call kore arekta direct eventlistener er mddhe function use kore korbo.
1. jekono ekta button a onclick event set kore tar mddhe document getElementById kore sekhanei call kore kaj kora jay. atar example dom.html file a ekta button a add kora ache.
2. function call kore: kno ekta button a clickeven set kore sekhane function call korte hobe. tarpr ekta function banay sekhne getElementById diye jake change korte hobe take dhorte hbe. sei id ke dhore take diye poriborton kora jay.
3. direct way: kono ekta button a id set kore setake document diye dhore setar shate addEventListener kore tar vitore dui peramiter er value use korte hbe, first je method a kaj hobe seta 2nd enyumous function call kore. tar vitore jake change korte chai take document diye dhore tar value change kora jay.
4. 
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

// option 3 make red
const makeRed = document.getElementById("makeRed");
makeRed.addEventListener('click', changeRed);
function changeRed(){
    document.getElementById("main").style.backgroundColor = "red";
}

// comment method write. first add event listener on button
document.getElementById("postButton").addEventListener('click', function(){
    // get comment box 
    const commentBox = document.getElementById("comment-input");
    const newComment = commentBox.value;
    
    // add this paragraph one there
    const showComment = document.getElementById("show-comment");
    // create new element to show this comment
    const para = document.createElement("p");
    para.innerText = newComment;
    showComment.appendChild(para);

    // emty the comment box
    commentBox.value = '';
})