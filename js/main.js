// inizializzo le variabili per chiamare i componenti del DOM 
const inputPassword = document.querySelector('#password');
const characters = document.querySelector('.characters');
const number = document.querySelector('.number');
const uppercase = document.querySelector('.uppercase');
const charactersSpecial = document.querySelector('.characters-special');
const bar = document.querySelector('.bar');
let countValid = 0;


// inizializzo le classi per generare il testo delle validazioni
function generateInnerHtmlValidatorElement(text,flag){
    
     return `<i class="fa-solid fa-check ${flag}"></i> <span class="${flag}">${text}</span>`
} 

function MinumCharacters(){
    if( inputPassword.value.length >= 9 ){  
        countValid = countValid + 1 ;
        characters.innerHTML = generateInnerHtmlValidatorElement('Almeno 9 caratteri','text-success');
    } else{
        characters.innerHTML =generateInnerHtmlValidatorElement('Almeno 9 caratteri','text-danger');
    } 
}

function MinumNumber(){

    if( inputPassword.value.match(/\w*\d/) ){  
        number.innerHTML = generateInnerHtmlValidatorElement('Almeno un numero','text-success');
        countValid = countValid + 1 ;
    } else{
        number.innerHTML = generateInnerHtmlValidatorElement('Almeno un numero','text-danger');

    }
}

function MinumUppercase(){
    if (inputPassword.value.match(/[A-Z]/)) {
        uppercase.innerHTML = generateInnerHtmlValidatorElement('Almeno una maiuscola','text-success');
        countValid = countValid + 1 ;
    } else {
        uppercase.innerHTML = generateInnerHtmlValidatorElement('Almeno una maiuscola','text-danger');
    }
}

function MinumSpecialCharacters(){
    if (inputPassword.value.match(/[!@#$%^&*(),.?":{}|<>]/)) {
        charactersSpecial.innerHTML = generateInnerHtmlValidatorElement('Almeno una carattere speciale','text-success');
        countValid = countValid + 1 ;
    } else {
        charactersSpecial.innerHTML = generateInnerHtmlValidatorElement('Almeno una carattere speciale','text-danger');
    }
}

function progressBar(){
    let myclass =`bar p-3 bg-secondary mt-5 position-relative`;
    if(countValid === 1){
        bar.classList = myclass + ' red' ;
    } else if(countValid === 2){
        bar.classList = myclass + ' yellow' ;
    }else if(countValid === 3){
        bar.classList = myclass + ' orange' ;
    } else if(countValid === 4){
        bar.classList = myclass + ' green' ;
    }  
    else {
        bar.classList = `bar p-3 bg-secondary mt-5 position-relative`
    }
}

function TogglePassword(){
  const privacy = document.querySelector('#eyes');
  privacy.addEventListener('click',function(){
     if(inputPassword.type === 'password'){
        inputPassword.type = 'text';
        privacy.classList='fa-solid fa-eye';
     }else{
         inputPassword.type = 'password'
         privacy.classList='fa-solid fa-eye-slash';
     }
  })
}


function IsValidInput(){ 
    
    inputPassword.addEventListener('input',function(){
        
        countValid = 0;
        MinumCharacters();
        MinumUppercase();
        MinumNumber();
        MinumSpecialCharacters();
        progressBar();
        console.log(countValid)
    })
}


// funzione che parte al refresh/caricamento iniziale della pagina
addEventListener('DOMContentLoaded',function(){
   IsValidInput(),
   TogglePassword();
})