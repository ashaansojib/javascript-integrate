// DOM : document object model. List that i know!!
/*
1. getElementById("id-mane");
2. getElementsByTagName("tag-name");
3. getElementsByClassName("class-name");
4. createElement("");
5. classList.add,remove("id");
6. querySelector("name");
7. querySelectorAll("name");
8. id-name.appendChild();
9. name.innerText,innerHTML
10. getAttribute();
11. setAttribute('attribute', value);
12. 
*/

/*
getElementById: ai function ta shudu ekta specific id diye kaj kore. jekono ekta jaygar change korte id diye function banay kaj kora jay.
*/
const mainArea = document.getElementById("main");
    mainArea.style.padding = "20px";
    mainArea.style.backgroundColor = "#ddd";

// -----------------------This line of comment code is write below----------------------------
/*
getElementsByTagName: tag function ta same type er joto gula tag thakbe sob gulake ekshate change korte pare. ata kaj korate gele obossoi loop use korte hobe. for loop er vitore ja isse use kora possible.
*/
// const styleByTag = document.getElementsByTagName("h2");
//     for(const h2 of styleByTag){
//         h2.style.paddingBottom = "4px";
//         h2.style.color = "#432354";
//     }
// -----------------------------------------------------------------------------------------
/*
getElementsByClassName: ai fucntion khub beshi use kora hobe. ata same class name sob gulate loop er maddhome ekshate kaj korte pare. tobe ata diye kaj korte hole obossoi loop use korte hobe.
*/
// const styleByClass = document.getElementsByClassName("post");
//     for(const post of styleByClass){
//         post.style.padding = "10px";
//         post.style.marginBottom = "10px";
//         post.style.backgroundColor = "#fff";
//     }
// const styleForP = document.getElementsByClassName("blog");
//     for(const blog of styleForP){
//         blog.style.color = "crimson";
//         blog.style.fontSize = "18px";
//     }
// -----------------------ai code guli niche run kora ache------------------------
/*
querySelector: this method shudu ekta class ba id er jnne kaj kore. querySelector . ba # er shate nam diye declare korte hy. ata onekta css er rule er mto kaj kore. ata jehetu first jethar shate match kheye kaj kore fele ai jnne kono loop er drkar hy na.
*/
const setNewByQuery = document.querySelector(".blog-title");
setNewByQuery.innerText = "I'm changing by only querySelector!";
// ------------------------------------------------------------------------------------------
/*
querySelectorAll: ata muloto all same class ba id niye kaj korar ekta way. ata korte gele for loop use kora lagbe.
*/
const styleByQueryAll = document.querySelectorAll(".post");
    for(const post of styleByQueryAll){
        post.style.borderRadius = "10px";
    }
//---------------------------------------------------------------------------------------------
/*
createElement: ata korar jonne tinta kaj kora lagbe first je element lagbe ta create korte hobe, second j parent a list korbe sekhane rakhte hbe and third jekhane sb code child hisbe thakbe sekhane append korte hobe.
*/
// create an elements first
const createEle = document.createElement("h2");
createEle.innerText = "This is a new title by JavaScript";

const createInfo = document.createElement("p");
createInfo.classList.add("blog");
createInfo.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, maxime, soluta veritatis maiores numquam excepturi libero animi veniam impedit doloremque quisquam nemo fuga voluptas neque! Quidem necessitatibus beatae cumque expedita?";

// add full creation for append next child
const createNextChild = document.createElement("article");
createNextChild.classList.add("post");
createNextChild.appendChild(createEle);
createNextChild.appendChild(createInfo);

// where to add
const addNewPost = document.getElementById("post-container");
addNewPost.appendChild(createNextChild);
// ------------------------------------------------------------------------------------
// uprer comment code run below
const styleByTag = document.getElementsByTagName("h2");
    for(const h2 of styleByTag){
        h2.style.paddingBottom = "4px";
        h2.style.color = "#432354";
    }
const styleByClass = document.getElementsByClassName("post");
    for(const post of styleByClass){
        post.style.padding = "10px";
        post.style.marginBottom = "10px";
        post.style.backgroundColor = "#fff";
    }
const styleForP = document.getElementsByClassName("blog");
    for(const blog of styleForP){
        blog.style.color = "crimson";
        blog.style.fontSize = "18px";
    }