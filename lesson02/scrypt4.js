//Реализовать функцию с тремя параметрами: 
//function mathOperation(arg1, arg2, operation), 
//где arg1, arg2 — значения аргументов, 
//operation — строка с названием операции. 
//В зависимости от переданного значения выполнить одну из арифметических операций 
//(использовать функции из пункта 5) и вернуть полученное значение (применить switch).

var arg1 = parseFloat(prompt('Ведите 1-е число', ''));
var arg2 = parseFloat(prompt('Ведите 2-е число не равное 0', ''));
var operation = prompt('Введите одну из 4-х операций: +, -, *, /', '');


function mathOperation(arg1, arg2, operation){
	switch(operation){
		case('+'):		
		return arg1 + arg2;
		break;
		case('-'):
		return arg1 - arg2;
		break;
		case('*'):
		return arg1 * arg2;
		break;
		case('/'):
		return arg1 / arg2;
		break;
	}	
}

alert('результат выбранной операции ( ' + operation  + ' )  :  ' + mathOperation(arg1, arg2, operation));
