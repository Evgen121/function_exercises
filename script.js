//Exercise 1

/* const checkAge = (age) => {
    (age > 18) ? true: confirm('Do you have your parents permission to access this page?')
}
console.log(checkAge(6)) */


//Exercise 2

/* const pow = (x, n) => {
    let result = x;
    if (n < 1) {
        console.log('no');
    } else {
        for (let i = 1; i < n; i++) {
            result = result * x;
        }
    }
    return result;
}
console.log(pow(2, 3)) */

//Exercise 3

/* const ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no()
}

ask(
    "Do you agree?",
    () => { alert("You agreed.") },
    () => { alert("You canceled the execution.") }
)
console.log(ask()) */

//Exercise 4

/* let calculator = {
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul()); */

//Exercise 5

/* const min = (a, b) => {

    return a > b ? b : a;
}
console.log(min(3, 12)) */