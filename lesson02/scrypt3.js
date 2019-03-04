var x = parseFloat(prompt('Ведите 1-е число', 'x'));
var y = parseFloat(prompt('Ведите 2-е число, кроме 0', 'y'));


function plus(x, y) {
	return x + y;
}

function minus(x, y) {
	return x - y;
}

function multi(x, y) {
	return x * y;
}

function division(x, y) {
	return x / y;
}

alert('Сложение 2-х чисел: ' + plus(x, y));
alert('Разность 2-х чисел: ' + minus(x, y));
alert('Умножение 2-х чисел: ' + multiplication(x, y));
alert('Деление 2-х чисел: ' + division(x, y))
