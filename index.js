let computerNumber = Math.floor(Math.random() * 100 + 1)
let userNumbers = []
let attempts = 0


console.log(computerNumber)

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value)
    
    if(userNumber > 100){
        document.getElementById('textOutput').innerHTML = 'Esse número é maior que 100'
        document.getElementById('inputBox').value = ''
    }

    else if(attempts < 10){
        if (userNumber == computerNumber){
            document.getElementById('textOutput').innerHTML = 'Parabéns!!!'
            document.getElementById('inputBox').setAttribute('Readonly','Readonly')
        }else if (userNumber > computerNumber){
            document.getElementById('textOutput').innerHTML = 'Número muito grande'
            document.getElementById('inputBox').value = ''
        }else{
            document.getElementById('textOutput').innerHTML = 'Número muito pequeno'
            document.getElementById('inputBox').value = ''
        }
        attempts += 1 
        document.getElementById('attempts').innerHTML = attempts
        userNumbers.push(userNumber)
        document.getElementById('guesses').innerHTML = userNumbers
    }else{
        document.getElementById('textOutput').innerHTML = 'Você já fez 10 tentativas'
        document.getElementById('inputBox').setAttribute('Readonly','Readonly')
    }
    
}

function newGame(){
    window.location.reload()
}

