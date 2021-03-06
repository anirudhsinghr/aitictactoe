/*
	AI tic tac toe
	created by Anirudh Singh Rathore
*/
var index,
	moves = 0,
	ele = document.querySelectorAll('div.element'),
	arr = new Array(10, 11, 12, 13, 14, 15, 16, 17, 18);

for (var i = 0 ; i < ele.length; i++) {

	ele[i].ontouchstart = clickHandler.bind(this);

	ele[i].onmouseenter = function () {

		if (this.getAttribute("data-set") == "false") {
			this.style.background = 'url(X.png)';
		}

		this.onclick = clickHandler.bind(this);
	};

	ele[i].onmouseleave = function () {
		if (this.getAttribute("data-set") == "false") {
			this.style.background = 'url()';
		}
	}
}

function clickHandler (e) {

	if (this.getAttribute("data-set") == "false") {
		this.style.background = 'url(X.png)';
		this.setAttribute("data-set", "true");
		arr[parseInt(this.getAttribute("data-pos"))] = 1;
		moves++;

		if (checkWin()) {
			alert("You've Won!!");
			resetGame();
		} else if (moves < 9) {
			
			index = calcIndex();
			if (index !== false) {
				arr[index] = 2;
			} else {
				index = rowFill();
				arr[index] = 2;
			}
			setBg();
			moves++;

			if (checkWin()) {
				alert("AI won");
				resetGame();
			}
		}  
		if (moves == 9 && checkWin() == false) {
			alert("Nobody Won!!");
			resetGame();
		}

		e.stopPropagation();
    	e.preventDefault();
	}
}


function calcIndex () {
	if (moves == 1 && arr[4] != 1) {
		return 4;
	} else if (moves == 1 && arr[4] == 1) {
		return 5;
	}else if (arr[0] == arr[1] && arr[0] == 1 && arr[2] != 2) {
		return 2;
	} else if (arr[0] == arr[2] && arr[0] == 1  && arr[1] != 2) {
		return 1;
	} else if (arr[1] == arr[2] && arr[1] == 1  && arr[0] != 2) {
		return 0;
	} else if (arr[3] == arr[4] && arr[3] == 1  && arr[5] != 2) {
		return 5;
	} else if (arr[3] == arr[5] && arr[3] == 1  && arr[4] != 2) {
		return 4;
	} else if (arr[4] == arr[5] && arr[4] == 1  && arr[3] != 2) {
		return 3;
	} else if (arr[6] == arr[7] && arr[6] == 1  && arr[8] != 2) {
		return 8;
	} else if (arr[6] == arr[8] && arr[6] == 1  && arr[7] != 2) {
		return 7;
	} else if (arr[7] == arr[8] && arr[7] == 1  && arr[6] != 2) {
		return 6;
	} else if (arr[0] == arr[3] && arr[0] == 1  && arr[6] != 2) {
		return 6;
	} else if (arr[0] == arr[6] && arr[0] == 1  && arr[3] != 2) {
		return 3;
	} else if (arr[3] == arr[6] && arr[3] == 1  && arr[0] != 2) {
		return 0;
	} else if (arr[1] == arr[4] && arr[1] == 1  && arr[7] != 2) {
		return 7;
	} else if (arr[1] == arr[7] && arr[1] == 1  && arr[4] != 2) {
		return 4;
	} else if (arr[4] == arr[7] && arr[4] == 1  && arr[1] != 2) {
		return 1;
	} else if (arr[2] == arr[5] && arr[2] == 1  && arr[8] != 2) {
		return 8;
	} else if (arr[2] == arr[8] && arr[2] == 1  && arr[5] != 2) {
		return 5;
	} else if (arr[5] == arr[8] && arr[5] == 1  && arr[2] != 2) {
		return 2;
	} else if (arr[0] == arr[4] && arr[0] == 1  && arr[8] != 2) {
		return 8;
	} else if (arr[0] == arr[8] && arr[0] == 1  && arr[4] != 2) {
		return 4;
	} else if (arr[4] == arr[8] && arr[4] == 1  && arr[0] != 2) {
		return 0;
	} else if (arr[2] == arr[4] && arr[2] == 1  && arr[6] != 2) {
		return 6;
	} else if (arr[2] == arr[6] && arr[2] == 1  && arr[4] != 2) {
		return 4;
	} else if (arr[4] == arr[6] && arr[4] == 1  && arr[2] != 2) {
		return 2;
	} else {
		return false;
	}
}

function rowFill () {
	for (var i = 0; i < arr.length; i++) {
		console.log(arr);
		if(arr[i] != 1 && arr[i] != 2) {
			return i;
		}
	}
}

function setBg () {
	for (var i = 0; i < ele.length; i++) {
		if(parseInt(ele[i].getAttribute("data-pos")) == index) {
			ele[i].style.background = "url(O.png)";
			ele[i].setAttribute("data-set", "true");
		}
	}
}

function checkWin () {
	if ( arr[0] == arr[1] && arr[0] == arr[2] ||
		 arr[3] == arr[4] && arr[3] == arr[5] ||
		 arr[6] == arr[7] && arr[6] == arr[8] ||
		 arr[0] == arr[3] && arr[0] == arr[6] ||
		 arr[1] == arr[4] && arr[1] == arr[7] ||
		 arr[2] == arr[5] && arr[2] == arr[8] ||
		 arr[0] == arr[4] && arr[0] == arr[8] ||
		 arr[2] == arr[4] && arr[2] == arr[6] ) {
		 return true;
	} else {
		return false;
	}
}

function resetGame () {
	moves = 0;
	for (var i = 0; i < ele.length; i++) {
		ele[i].setAttribute("data-set", "false");
		ele[i].setAttribute("data-pos", i);
		ele[i].style.background = 'url()';
		arr[i] = 10 + i;
	}
}
