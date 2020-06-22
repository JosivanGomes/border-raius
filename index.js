inputs = document.querySelectorAll('input')
retangulo = document.querySelector('#container div')
userReturn = document.querySelector('#output')

lados = []

inputs.forEach(input => {
 
    lados.push(input)

})

console.log(lados)


var cssTop = []
var cssBot = []

lados.forEach((lado,index) => {
    lado.addEventListener('change', () => {
        if (index == 0 || index == 1){
            cssTop[index] = (`${lado.value}px `)
        }else{
            cssBot[index-2] = (`${lado.value}px `)
        }
        
        retangulo.style = `border-radius: ${cssTop.join().replace(',', '')} ${cssBot.join().replace(',', '')};` /*css.join()*/

        userReturn.innerHTML = `elementHTML{</br> border-radius: ${cssTop.join().replace(',', '')} ${cssBot.join().replace(',', '')};</br>}`
    })
})




