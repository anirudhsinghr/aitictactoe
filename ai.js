var randomIndex,
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

function clickHandler () {

	if (this.getAttribute("data-set") == "false") {
		this.style.background = 'url(X.png)';
		this.setAttribute("data-set", "true");
		arr[parseInt(this.getAttribute("data-pos"))] = 1;
		moves++;

		if (checkWin()) {
			alert("You've Won!!");
			resetGame();
		}

		if (moves <= 8) {
			moves++;
			randomIndex = aiIndex();
			arr[randomIndex] = 2;
			setBg();
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

function aiIndex () {
	var tmpIndex;
	while (true) {
		tmpIndex = Math.floor(Math.random() * 10);
		if (arr[tmpIndex] != 1 && arr[tmpIndex] != 2 && tmpIndex < 9) {
			console.log(arr);
			console.log(tmpIndex);
			return tmpIndex;
		}
	}
}

function setBg () {
	for (var i = 0; i < ele.length; i++) {
		if(parseInt(ele[i].getAttribute("data-pos")) == randomIndex) {
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