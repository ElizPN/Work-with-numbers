function integer (min, max) {
    let result = Math.round(Math.random() * 10);
    while (result < min || result > max) {
        result = Math.round(Math.random() * 10);
    }  
    return result;
} 
console.log(integer(3,7));



