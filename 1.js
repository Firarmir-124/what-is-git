function addNumbers(a, b) {
    let set = prompt('оператор: '),
        a = prompt('Первое число: '),
        b = prompt('Второе число: ');
        if (set === '+') return a + b
        else if (set === '-') return a - b
        else console.log('Nan')
}