function drawChess() {
	let mainBlock = document.querySelector('.main-block');
	let flag = true;
	let letters = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
	let numbers = [' ', '1', '2', '3', '4', '5', '6', '7', '8'];

	for (let i = 0; i < 8; i++) {
		for (var j = 0; j < 8; j++) {
			if (j==0) flag = !flag;
			else {}
			let block = document.createElement('div');

			if (flag) block.className = 'block black';
			else block.className = 'block white';

			mainBlock.appendChild(block);
			flag = !flag;

		}
	}
}





drawChess();