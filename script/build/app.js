"use strict";
const colorHexa = document.querySelector('#colorHexa');
const colorRgb = document.querySelector('#colorRgb');
const colorSimple = document.querySelector('#colorSimple');
const colorText = document.querySelector('#colorText');
const btnColorRandom = document.querySelector('#btnColorRandom');
let colorType = "hexadecimal";
colorHexa === null || colorHexa === void 0 ? void 0 : colorHexa.addEventListener('click', () => {
    colorType = "hexadecimal";
    console.log(colorType);
});
colorRgb === null || colorRgb === void 0 ? void 0 : colorRgb.addEventListener('click', () => {
    colorType = "rgb";
    console.log(colorType);
});
colorSimple === null || colorSimple === void 0 ? void 0 : colorSimple.addEventListener('click', () => {
    colorType = "simple text";
    console.log(colorType);
});
