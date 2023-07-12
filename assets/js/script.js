let characters = [];

let passOne = document.getElementById("pass-one")
let passTwo = document.getElementById("pass-two")
let numEl = document.getElementById("num-text")
let numCk = document.getElementById("number")
let symbolCk = document.getElementById("symbols")


function track()
{
    characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
    if(numCk.checked == true)
    {
        characters = characters.concat(num)
    }
    if(symbolCk.checked == true)
    {
         characters = characters.concat(symbols)
    }
}

// Password Length Start
let minPassLen = 10;
numEl.textContent = minPassLen

function increment(){
    if(minPassLen >=6 && minPassLen<20){
            minPassLen += 1;
            numEl.textContent = minPassLen;
    }
}

function decrement(){
    if(minPassLen >6 && minPassLen<=20){
            minPassLen -=1;
            numEl.textContent = minPassLen;
    }
}
// Password Length End

function getRandom(){
     let randNum = Math.floor(Math.random() * characters.length)
     return characters[randNum];
}
function randerPassword(){
    passOne.value = genratePassword()       
    passTwo.value = genratePassword()
}
function genratePassword(){
    track()
    let password = ""
    for(let i=0;i<minPassLen;i++)
    {
        password+= getRandom()
    }
    return password  
}




