const expression = '8/3';
const split = x => x.split("");
const [left, b, right] = split(expression);
const getOperation = operator => {
    switch (operator) {
        case '+':
            return (left, right) => left + right;
        case '-':
            return (left, right) => left - right ;
        case '*':
            return (left, right) => left * right;
        case '%':
            return (left, right) => left % right;
        case '/':
            return (left, right) => left / right;
        case '^':
            return (left, right) => left ^ right;

    }

}
const mathFunction = getOperation(b);
console.log(mathFunction(Number(left),Number(right)))


