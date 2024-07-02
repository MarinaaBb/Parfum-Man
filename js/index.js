



//Cuándo MOUSE OVER en cada .Contenedor-titulo
//le ADD isVisible  a cada .Contenedor-img




const titulos = document.querySelectorAll(`.Contenedor-titulo`)
const containerImg = document.querySelectorAll(`.Contenedor-img`)

console.log(titulos)
console.log(containerImg)


titulos.forEach((_, index) => {



    titulos[index].addEventListener(`mouseover`, () => {

        containerImg[index].classList.add(`isVisible`)

    })

    titulos[index].addEventListener(`mouseout`, () => {

        containerImg[index].classList.remove(`isVisible`)

    })


})