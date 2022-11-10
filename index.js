const form = document.getElementById('formForCheck')
const input = document.getElementById('numberForCheck')
const button = document.querySelector('#formForCheck > button')

const Moon_Algorithm = setValue => {
	let ch = 0;
	const num = String(setValue).replace(/\D/g, '');
	const isOdd = num.length % 2 !== 0;

	if ('' === num) return false;

	for (let i = 0; i < num.length; i++) {
		let n = parseInt(num[i], 10);

		ch += (isOdd | 0) === (i % 2) && 9 < (n *= 2) ? (n - 9) : n;
	}

	return 0 === (ch % 10);
};

function timeoutF() {
	timeout && clearTimeout(timeout)
	const timeout = setTimeout(() => {
		button.innerHTML = 'Проверить код'
		button.style.backgroundColor = 'black'
		button.style.color = 'white'
	}, 2000)
}

form.addEventListener('submit', (e) => {
	e.preventDefault()
	button.style.color = 'white'

	if(input.value.length !== 16) {
		button.innerHTML = 'Введите 16-тизначеное число'
		button.style.backgroundColor = 'red'
	} else {
		if(Moon_Algorithm(input.value)) {
			button.innerHTML = 'Проверка кода прошла успешно'
			button.style.backgroundColor = 'green'
		} else {
			button.innerHTML = 'Проверка кода не пройдена'
			button.style.backgroundColor = 'red'
		}
	}
	button.style.color = 'white'


})