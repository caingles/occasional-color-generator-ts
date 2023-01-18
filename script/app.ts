const colorHexa = document.querySelector('#colorHexa')
const colorRgb = document.querySelector('#colorRgb')
const colorSimple = document.querySelector('#colorSimple')
const colorText = document.querySelector('#colorText')
const btnColorRandom = document.querySelector('#btnColorRandom')

let colorType: string = "hexadecimal"

colorHexa?.addEventListener('click', () => {
    colorType = "hexadecimal"
})

colorRgb?.addEventListener('click', () => {
    colorType = "rgb"
})

colorSimple?.addEventListener('click', () => {
    colorType = "simple text"
})
