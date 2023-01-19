"use strict";
const colorHexa = document.querySelector('#colorHexa');
const colorRgb = document.querySelector('#colorRgb');
const colorSimple = document.querySelector('#colorSimple');
const colorText = document.querySelector('#colorText');
const btnColorRandom = document.querySelector('#btnColorRandom');
const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Pink'];
let colorType = "hexadecimal";
const randomNumberGenerator = (typeNumber) => {
    let numberRandom = 0;
    if (typeNumber == "rgb") {
        numberRandom = Math.floor(Math.random() * (255 + 1));
        return numberRandom;
    }
    if (typeNumber == "hexadecimal") {
        numberRandom = Math.floor(Math.random() * (16 + 1));
        return numberRandom.toString(16);
    }
    if (typeNumber == "simple text") {
        numberRandom = Math.floor(Math.random() * (5 + 1));
        return numberRandom;
    }
};
colorHexa === null || colorHexa === void 0 ? void 0 : colorHexa.addEventListener('click', () => {
    colorType = "hexadecimal";
});
colorRgb === null || colorRgb === void 0 ? void 0 : colorRgb.addEventListener('click', () => {
    colorType = "rgb";
});
colorSimple === null || colorSimple === void 0 ? void 0 : colorSimple.addEventListener('click', () => {
    colorType = "simple text";
});
