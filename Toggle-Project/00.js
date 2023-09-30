
function toggleButton(selector){
    const button = document.querySelector(selector);
    if(!button.classList.contains('is-toggled')){
        // turn off already turn ON button
        turnOffPreviousButton();

        button.classList.add('is-toggled');
    }else{
        button.classList.remove('is-toggled');
    }
}


function turnOffPreviousButton(){
    // previous buttons function
    const previousButton = document.querySelector('.is-toggled');
    if(previousButton){
        previousButton.classList.remove('is-toggled');
    }
}