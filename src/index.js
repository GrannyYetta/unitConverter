/*
Equivalences
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("conversion-input");

const convertBtn = document.getElementById("convert-btn");
const clearBtn = document.getElementById("clear-btn");

const convertLength = document.getElementById("unit-p-length");
const convertVolume = document.getElementById("unit-p-volume");
const convertMass = document.getElementById("unit-p-mass");

convertBtn.addEventListener("click", function convert() {
	if (inputEl.value !== "") {
		convertLength.innerHTML = `${inputEl.value} meters = ${(
			inputEl.value * 3.281
		).toFixed(3)} feet | ${inputEl.value} feet = ${(
			inputEl.value / 3.281
		).toFixed(3)} meters`;

		convertVolume.innerHTML = `${inputEl.value} liters = ${(
			inputEl.value * 0.264
		).toFixed(3)} gallons | ${inputEl.value} gallons = ${(
			inputEl.value / 0.264
		).toFixed(3)} liters`;

		convertMass.innerHTML = `${inputEl.value} kilograms = ${(
			inputEl.value * 2.204
		).toFixed(3)} pounds | ${inputEl.value} pounds = ${(
			inputEl.value / 2.204
		).toFixed(3)} kilograms`;
	}
});

clearBtn.addEventListener("click", function () {
	inputEl.value = "";
	convertLength.textContent = "";
	convertVolume.textContent = "";
	convertMass.textContent = "";
});
