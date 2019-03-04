var val = parseFloat(prompt('Ведите значение val - заданное число', 'val'));
var pow = parseFloat(prompt('Ведите значение pow - степень числа', 'pow'));


function power(val, pow){
	if (pow >= 0) {
		if (pow == 0) {       // проверка степени 0, при ней число получается всегда 1
			return 1;
		}
		else if (pow != 1) {  // выполняем рекурсию до тех пор пока степень не станет 1 
			return power (val , pow -1) * val;
		} else {              // при степени 1 выводится само число без вычисления
		return val;
		}
	}else{                    // при возведении в отрицательную степень все загоняется в знаменатель
		return 1 / (power (val , -pow -1) * val)
	}
	
}

alert('Возведенное число ' + val + ' в степень ' + pow + ' равняется ' + power(val, pow));