        // all key events: focus event
        document.getElementById("text-field").addEventListener('focus', function(){
            const changeKey = document.getElementById("triggered");
            changeKey.style.color = "red";
        })
        // blur events
        document.getElementById("text-field").addEventListener('blur', function(){
                document.getElementById("triggered").style.color = "black";
        })
        //keydown
        // document.getElementById("text-field").addEventListener('keydown', function(){
        //     console.log("this is kewdown")
        // })
        //keypress
        // document.getElementById("text-field").addEventListener('keypress', function(){
        //     console.log("key press")
        // })
        // keyup
        // document.getElementById("text-field").addEventListener('keyup', function(){
        //     console.log("this is kew up")
        // })
//github conformation game
document.getElementById("delete-confirm").addEventListener('keyup', function(event){
    const text = event.target.value;
    const deleteButton = document.getElementById("delete-btn");
    if(text === "delete"){
        deleteButton.removeAttribute('disabled');
    }
    else{
        deleteButton.setAttribute('disabled', true);
    }
})
document.getElementById("delete-btn").addEventListener('click', function(){
    const secret = document.getElementById("triggered");
    secret.style.display = "none";
})