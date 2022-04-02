"use strict";

let row01 = document.getElementById('01');
let row02 = document.getElementById('02');
let row03 = document.getElementById('03');
let row04 = document.getElementById('04');
let row05 = document.getElementById('05');
let row06 = document.getElementById('06');
let row07 = document.getElementById('07');
let row08 = document.getElementById('08');
let row09 = document.getElementById('09');
let row10 = document.getElementById('10');
let row11 = document.getElementById('11');
let row12 = document.getElementById('12');
let row13 = document.getElementById('13');
let row14 = document.getElementById('14');
let row15 = document.getElementById('15');
let row16 = document.getElementById('16');
let row17 = document.getElementById('17');
let row18 = document.getElementById('18');
let row19 = document.getElementById('19');
let row20 = document.getElementById('20');
let row21 = document.getElementById('21');
let row22 = document.getElementById('22');
let row23 = document.getElementById('23');
let row24 = document.getElementById('24');
let row25 = document.getElementById('25');
let row26 = document.getElementById('26');
let row27 = document.getElementById('27');
let row28 = document.getElementById('28');
let row29 = document.getElementById('29');
let row30 = document.getElementById('30');



let date = new Date();
let day = date.getDate();
let tarik = date.getHours();
let minite = date.getMinutes();
let mante = date.getMonth();




if (mante == 3 && day == 3) {
	selectRow(row01,3,4,31,18,16,"apr");
} else if (mante == 3 && day == 4) {
	selectRow(row02,4,4,30,18,16,"apr");
} else if (mante == 3 && day == 5) {
	selectRow(row03,5,4,29,18,17,"apr");
} else if (mante == 3 && day == 6) {
	selectRow(row04,6,4,28,18,17,"apr");
} else if (mante == 3 && day == 7) {
	selectRow(row05,7,4,27,18,17,"apr");
} else if (mante == 3 && day == 8) {
	selectRow(row06,8,4,26,18,18,"apr");
} else if (mante == 3 && day == 9) {
	selectRow(row07,9,4,25,18,18,"apr");
} else if (mante == 3 && day == 10) {
	selectRow(row08,10,4,24,18,19,"apr");
} else if (mante == 3 && day == 11) {
	selectRow(row09,11,4,23,18,19,"apr");
} else if (mante == 3 && day == 12) {
	selectRow(row10,12,4,22,18,19,"apr");
} else if (mante == 3 && day == 13) {
	selectRow(row11,13,4,21,18,20,"apr");
} else if (mante == 3 && day == 14) {
	selectRow(row12,14,4,20,18,20,"apr");
} else if (mante == 3 && day == 15) {
	selectRow(row13,15,4,19,18,21,"apr");
} else if (mante == 3 && day == 16) {
	selectRow(row14,16,4,18,18,21,"apr");
} else if (mante == 3 && day == 17) {
	selectRow(row15,17,4,17,18,21,"apr");
} else if (mante == 3 && day == 18) {
	selectRow(row16,18,4,16,18,22,"apr");
} else if (mante == 3 && day == 19) {
	selectRow(row17,19,4,15,18,22,"apr");
} else if (mante == 3 && day == 20) {
	selectRow(row18,20,4,14,18,23,"apr");
} else if (mante == 3 && day == 21) {
	selectRow(row19,21,4,13,18,23,"apr");
} else if (mante == 3 && day == 22) {
	selectRow(row20,22,4,12,18,24,"apr");
} else if (mante == 3 && day == 23) {
	selectRow(row21,23,4,11,18,24,"apr");
} else if (mante == 3 && day == 24) {
	selectRow(row22,24,4,10,18,24,"apr");
} else if (mante == 3 && day == 25) {
	selectRow(row23,25,4,9,18,25,"apr");
} else if (mante == 3 && day == 26) {
	selectRow(row24,26,4,8,18,25,"apr");
} else if (mante == 3 && day == 27) {
	selectRow(row25,27,4,7,18,26,"apr");
} else if (mante == 3 && day == 28) {
	selectRow(row26,28,4,6,18,26,"apr");
} else if (mante == 3 && day == 29) {
	selectRow(row27,29,4,5,18,27,"apr");
} else if (mante == 3 && day == 30) {
	selectRow(row28,30,4,4,18,27,"apr");
} else if (mante == 4 && day == 1) {
	selectRow(row29,1,4,3,18,28,"may");
} else if (mante == 4 && day == 2) {
	selectRow(row30,2,4,2,18,28,"may");
}






function selectRow(rowId,tar,shur,smin,ehur,emin,mant) {
	rowId.style.backgroundColor = "green";
	let inColr = rowId.querySelectorAll("td");
	for(let i = 0; i < inColr.length; i++) {
		inColr[i].style.color = "#fff";
	}

	let date_get = new Date().getTime();
	let time_set = new Date(`${tar} ${mant} 2022 ${shur}:${smin}:00`).getTime();
	let conS = Math.floor((time_set - date_get) / 1000);	

	if (conS > 0) {
		setInterval(function(){
			let date = new Date().getTime();
			let timeSet = new Date(`${tar} ${mant} 2022 ${shur}:${smin}:00`).getTime();
			let concat = timeSet - date;
			let secend = Math.floor(concat / 1000);
			let AllSecend = Math.floor(secend / 60);
			let lastSecend = Math.floor(secend % 60);
			let allMinite = Math.floor(AllSecend / 60);
			let lastMinite = Math.floor(AllSecend % 60);
			let AllHour = Math.floor(allMinite / 24);
			let lastHour = Math.floor(allMinite % 24);

			let show = "সময় বাকি আসে " + lastHour + ":" + lastMinite + ":" + lastSecend;
			inColr[3].innerText = show;

		},1000);
	} else {

		setInterval(function(){
			let date = new Date().getTime();
			let timeSet = new Date(`${tar} ${mant} 2022 ${ehur}:${emin}:00`).getTime();
			let concat = timeSet - date;
			let secend = Math.floor(concat / 1000);
			let AllSecend = Math.floor(secend / 60);
			let lastSecend = Math.floor(secend % 60);
			let allMinite = Math.floor(AllSecend / 60);
			let lastMinite = Math.floor(AllSecend % 60);
			let AllHour = Math.floor(allMinite / 24);
			let lastHour = Math.floor(allMinite % 24);

			let show = "সময় বাকি আসে " + lastHour + ":" + lastMinite + ":" + lastSecend;
			inColr[4].innerText = show;

		},1000);
	}
}

