// inizializzo le variabili per chiamare i componenti del DOM 
const inputPassword = document.querySelector('#password');
const characters = document.querySelector('.characters');
const number = document.querySelector('.number');
const uppercase = document.querySelector('.uppercase');
const charactersSpecial = document.querySelector('.characters-special');
const bar = document.querySelector('.bar');
const messagePasswordDom = document.querySelector('#messagePassword');
let countValid = 0;


function messagePassword(){
    if(countValid === 1){
        messagePasswordDom.innerHTML=`<h4 class="mt-5 text-danger" id="messagePassword">Password Debole</h4>`
    } else if(countValid === 2){
        messagePasswordDom.innerHTML=`<h4 class="mt-5" style="color:#ffd900" id="messagePassword">Password Moderata</h4>`
    } else if(countValid === 3){
        messagePasswordDom.innerHTML=`<h4 class="mt-5" style="color:#fe9a00" id="messagePassword">Password Sicura</h4>`
    } else if(countValid === 4){
        messagePasswordDom.innerHTML=`<h4 class="mt-5" style="color:#42a646" id="messagePassword">Password Molto Sicura</h4>`
    } else{
         messagePasswordDom.innerHTML=`<h4 class="mt-5" id="messagePassword">Segui le indicazioni Per generare una password sicura</h4>`
    }
}


// inizializzo le classi per generare il testo delle validazioni
function generateInnerHtmlValidatorElement(text,flag,icon){
    
     return `<i class="fa-solid fa-${icon} ${flag}"></i> <span class="${flag}">${text}</span>`
} 


function MinumCharacters(){
    if( inputPassword.value.length >= 9 && inputPassword.value.match(/[a-z]/g)){  
        countValid = countValid + 1 ;
        characters.innerHTML = generateInnerHtmlValidatorElement('Almeno 9 caratteri','text-success','check');
    } else{
        characters.innerHTML =generateInnerHtmlValidatorElement('Almeno 9 caratteri','text-danger','x');
    } 
}

function MinumNumber(){

    if( inputPassword.value.match(/\w*\d/) ){  
        number.innerHTML = generateInnerHtmlValidatorElement('Almeno un numero','text-success','check');
        countValid = countValid + 1 ;
    } else{
        number.innerHTML = generateInnerHtmlValidatorElement('Almeno un numero','text-danger','x');

    }
}

function MinumUppercase(){
    if (inputPassword.value.match(/[A-Z]/)) {
        uppercase.innerHTML = generateInnerHtmlValidatorElement('Almeno una maiuscola','text-success','check');
        countValid = countValid + 1 ;
    } else {
        uppercase.innerHTML = generateInnerHtmlValidatorElement('Almeno una maiuscola','text-danger','x');
    }
}

function MinumSpecialCharacters(){
    if (inputPassword.value.match(/[!@#$%^&*(),.?":{}|<>]/)) {
        charactersSpecial.innerHTML = generateInnerHtmlValidatorElement('Almeno una carattere speciale','text-success','check');
        countValid = countValid + 1 ;
    } else {
        charactersSpecial.innerHTML = generateInnerHtmlValidatorElement('Almeno una carattere speciale','text-danger','x');
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
        messagePassword()
        console.log(countValid)
    })
}


// funzione che parte al refresh/caricamento iniziale della pagina
addEventListener('DOMContentLoaded',function(){
   IsValidInput(),
   TogglePassword();
})