
function readNumber() {
    let answer = prompt('Enter the number','');
    if (answer == null || answer == ' ') {
        alert('number : null') 
    } else { 
        while (isFinite(answer) === false) {
            answer = prompt('Enter the number again ','');  
        }
        alert (answer);
    }  
} 


readNumber();



























