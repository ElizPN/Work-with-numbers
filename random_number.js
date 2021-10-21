function random(min, max) {
    let result = Math.random () * 1000;
    while (result < min || result >= max) {
        result = Math.random () * 1000;
    }
    return result;  
}
console.log(random(10,7000));
