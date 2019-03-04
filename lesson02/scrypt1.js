var a = +parseInt(prompt("Введите первое целое число: "));
var b = +parseInt(prompt("Введите второе целое число: "));
var c = 0;

if (a >= 0 && b >= 0) {
	c = a - b;
	alert("Разность чисел a, b : " + c);
		
} else if (a < 0 && b < 0) {
	c = a * b;
	alert("Произведение чисел a, b : " + c);
} else {
	c = a + b;
	alert("Сумма чисел a, b : " + c);
}

