const colorHexa = document.querySelector('#colorHexa')
const colorRgb = document.querySelector('#colorRgb')
const colorSimple = document.querySelector('#colorSimple')
const colorText = document.querySelector('#colorText')
const btnColorRandom = document.querySelector('#btnColorRandom')
const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Pink']
let colorType: string = "hexadecimal"
let numberRandom: number = 0;

const randomNumberGenerator = (typeNumber: string) => {

    if (typeNumber == "rgb") {
        numberRandom = Math.floor(Math.random() * (255 + 1))
        return numberRandom;
    }

    if (typeNumber == "hexadecimal") {
        numberRandom = Math.floor(Math.random() * (16 + 1))
        return numberRandom.toString(16);
    }

    if (typeNumber == "simple text") {
        numberRandom = Math.floor(Math.random() * 5)
        return numberRandom;
    }
}

colorHexa?.addEventListener('click', () => {
    colorType = "hexadecimal"
})

colorRgb?.addEventListener('click', () => {
    colorType = "rgb"
})

colorSimple?.addEventListener('click', () => {
    colorType = "simple text"
})

btnColorRandom?.addEventListener('click', () => {

    if (colorType === 'rgb') {
        document.body.style.background = `rgb(${randomNumberGenerator("rgb")}, ${randomNumberGenerator("rgb")}, ${randomNumberGenerator("rgb")})`
    }

    if (colorType === 'hexadecimal') {
        document.body.style.background = `#${randomNumberGenerator("hexadecimal")}${randomNumberGenerator("hexadecimal")}${randomNumberGenerator("hexadecimal")}`
    }

    if (colorType === 'simple text') {
        let colorSimpleNumber: any = randomNumberGenerator("simple text")
        document.body.style.background = `${colors[colorSimpleNumber]}`
    }
})
