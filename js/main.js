/* let nombre = prompt("Ingrese su nombre")
let edad = prompt("Ingrese su edad")
let resultado = "Hola! " + nombre + " sabemos que tenes " + edad + " años!"
alert(resultado)

 */
function cotizar(n){
    
    let productos = true
    let producto = 0
    let cotTotal = 0

    while(productos){
        producto++

        let nombre = prompt(`Ingrese el nombre del producto :`).toLocaleUpperCase()

        let kilos = Number(prompt(`Ingrese la cantidad de Kilos que desea adquirir de ${nombre}:`))
        let precioTotalkilos = kilos; 
        console.log(`precio total días persona ${producto}: `,precioTotalkilos) 
        let elegir = Number(prompt(`Para ${kilos} kilos tenemos estas opciones:\n\n- Ingrese 1 si desea el GENÉRICO - 30 soles\n- Ingrese 2 si desea el ORIGINAL - 50 soles\n\nIngrese que opción le interesa para: ${nombre}`))
        if(elegir === 1){ 
            contelegir = 30 *  kilos
        }else if(elegir === 2){
            contelegir = 50 * kilos

        }else{
            alert("Ingresaste una opción inválida")
            elegir === 0
        }
        console.log(`Precio elegido ${producto}:`, contelegir) 

        let cotPersona = contelegir
        console.log(`cotización por persona persona ${producto}:`, cotPersona) 

        cotTotal+=cotPersona
        console.log("cotización total" ,cotTotal)
        

        productos = confirm("¿Desea adquirir otro producto?")
    }
    cotTotal = contelegir
    console.log("cotización total con valor de continente" ,cotTotal)
    alert(`DESGLOCE COTIZACIÓN:\nEl precio final es de: ${cotTotal} Soles`)
}

alert("Bienvenido a Petlofr")
let continente = prompt("Ingrese el producto que te interesa:\n\n- ricocan\n- allktoy\n- breeder\n- dogChow")
let continenteLowerCase = continente.toLocaleLowerCase()
if(continenteLowerCase === "ricocan"){
    alert("Gracias por escoger Ricocan\n\nTenemos estas opciones a:\n- Cachorro\n- Joven\n- Adulto")


}else if(continenteLowerCase === "allktoy"){
    alert("Gracias por escoger Ricocan\n\nTenemos estas opciones a:\n- Cachorro\n- Joven\n- Adulto")


}else if(continenteLowerCase === "breeder"){
    alert("Gracias por escoger Ricocan\n\nTenemos estas opciones a:\n- Cachorro\n- Joven\n- Adulto")



}else{
    alert("Lo siento, no tenemos ese producto")
}