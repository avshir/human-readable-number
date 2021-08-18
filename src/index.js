module.exports = function toReadable(number) {
	let objNumbers = {
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		15: 'fifteen',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen',
		20: 'twenty',
		30: 'thirty',
		40: 'forty',
		50: 'fifty',
		60: 'sixty',
		70: 'seventy',
		80: 'eighty',
		90: 'ninety',
		100: 'one hundred',
		200: 'two hundred',
		300: 'three hundred',
		400: 'four hundred',
		500: 'five hundred',
		600: 'six hundred',
		700: 'seven hundred',
		800: 'eight hundred',
		900: 'nine hundred',
	};
	if (number <= 20) {
		return objNumbers[number];
	}
	let res = '';
	let arrNumbers = number.toString().split('');// ['3','0','3']
	if (arrNumbers.length === 2) {
		arrNumbers[0] = arrNumbers[0] + 0;
	} else if (arrNumbers.length === 3) {
		arrNumbers[0] = arrNumbers[0] + '00';
		arrNumbers[1] = arrNumbers[1] + '0';
	}
	//console.log(arrNumbers);// ['300','00','3']
	arrNumbers = arrNumbers.filter(el => el !== "0").filter(el => el !== "00");
	//console.log(arrNumbers);// ['300','3']
	if (arrNumbers.length === 3 && arrNumbers[1] <= 19) {
		arrNumbers[1] = arrNumbers[1].slice(0, 1) + arrNumbers[2];
		arrNumbers.pop();
	}
	//console.log(arrNumbers);// ['300','3']
	for (let i = 0; i < arrNumbers.length; i++) {
		res += `${objNumbers[arrNumbers[i]]} `;
	}
	//console.log(res);
	return res.trimEnd();
}
